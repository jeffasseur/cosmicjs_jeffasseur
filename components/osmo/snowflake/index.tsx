"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";

export type SnowflakeEffectProps = {
  strength?: number;   // 0–10
  infinite?: boolean;
  className?: string;
};

export default function SnowflakeEffect({
  strength = 4,
  infinite = true,
  className,
}: SnowflakeEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gsapContext = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const templates = Array.from(
      container.querySelectorAll<HTMLElement>("[data-snowflake]")
    );

    if (templates.length === 0) {
      console.warn(
        "SnowflakeEffect: No elements with [data-snowflake] found."
      );
      return;
    }

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const s = clamp(strength, 0, 10);

    gsapContext.current = gsap.context(() => {
      // Configuration
      const durationMin = 8;
      const durationMax = 12;
      const scaleMin = 0.3;
      const scaleMax = 1.2;
      const opacityMin = 0.2;
      const opacityMax = 1.0;

      const spawnRate = gsap.utils.mapRange(0, 10, 0.15, 5.0, s);
      const maxOnScreen = Math.round(
        gsap.utils.mapRange(0, 10, 12, 180, s)
      );
      const burstCount = Math.round(
        gsap.utils.mapRange(0, 10, 10, 160, s)
      );

      let running = true;
      let activeCount = 0;
      let scheduledCall: gsap.core.Tween | null = null;
      let burstSpawned = 0;

      const getHeight = () =>
        container.clientHeight || window.innerHeight;

      function cleanupFlake(
        flake: HTMLElement,
        tweens: (gsap.core.Tween | undefined)[]
      ) {
        tweens.forEach(t => t?.kill());
        flake.remove();
        activeCount--;

        if (!infinite && burstSpawned >= burstCount && activeCount <= 0) {
          stop(false);
        }
      }

      function stop(removeExisting = true) {
        running = false;
        scheduledCall?.kill();

        if (removeExisting && container) {
          container
            .querySelectorAll(".snowflake-el.is-spawned")
            .forEach(el => el.remove());
          activeCount = 0;
        }
      }

      function spawnOne() {
        if (!running) return;
        if (activeCount >= maxOnScreen) return;
        if (!container) return;

        const tpl =
          templates[Math.floor(Math.random() * templates.length)];
        const flake = tpl.cloneNode(true) as HTMLElement;

        flake.classList.remove("hidden");
        flake.classList.add("is-spawned");
        flake.style.willChange = "transform, opacity";

        const scale = gsap.utils.random(scaleMin, scaleMax);
        const duration = gsap.utils.random(durationMin, durationMax);

        const baseSway = gsap.utils.random(12, 60);
        const sway = baseSway * (0.6 + s / 20);

        const containerWidth =
          container.clientWidth || window.innerWidth;
        const swayPct = (sway / containerWidth) * 100;
        const padPct = Math.min(20, Math.max(0, swayPct));

        flake.style.left = `${gsap.utils.random(
          padPct,
          100 - padPct
        )}%`;

        flake.style.opacity = String(
          gsap.utils.random(opacityMin, opacityMax)
        );

        container.appendChild(flake);
        activeCount++;

        const h = getHeight();
        const startY = -gsap.utils.random(30, Math.min(180, h * 0.25));
        const endY = h + gsap.utils.random(30, Math.min(220, h * 0.35));

        const xStart = gsap.utils.random(-sway, sway);
        const xEnd = -xStart;

        const rotStart = gsap.utils.random(-12, 12);
        const rotEnd = gsap.utils.random(-28, 28);

        let fallTween: gsap.core.Tween;
        let swayTween: gsap.core.Tween;
        let rotTween: gsap.core.Tween;
        let fadeTween: gsap.core.Tween;

        fallTween = gsap.fromTo(
          flake,
          { y: startY, xPercent: -50, scale, rotate: rotStart },
          {
            y: endY,
            xPercent: -50,
            duration,
            ease: "none",
            onComplete: () =>
              cleanupFlake(flake, [
                fallTween,
                swayTween,
                rotTween,
                fadeTween,
              ]),
          }
        );

        swayTween = gsap.fromTo(
          flake,
          { x: xStart },
          {
            x: xEnd,
            ease: "sine.inOut",
            duration: gsap.utils.random(1.6, 3.8),
            repeat: Math.max(1, Math.floor(duration / 2)),
            yoyo: true,
          }
        );

        rotTween = gsap.fromTo(
          flake,
          { rotate: rotStart },
          {
            rotate: rotEnd,
            ease: "sine.inOut",
            duration: gsap.utils.random(2.2, 5.0),
            repeat: Math.max(1, Math.floor(duration / 3)),
            yoyo: true,
          }
        );

        fadeTween = gsap.to(flake, {
          opacity: 0,
          duration: 1,
          delay: Math.max(0, duration - 1),
        });
      }

      function scheduleNext() {
        if (!running) return;

        const avgGap = 1 / spawnRate;
        const nextIn = gsap.utils.random(
          avgGap * 0.6,
          avgGap * 1.4
        );

        scheduledCall = gsap.delayedCall(nextIn, () => {
          spawnOne();
          scheduleNext();
        });
      }

      if (infinite) {
        const seedCount = Math.round(
          gsap.utils.mapRange(0, 10, 6, 60, s)
        );
        for (let i = 0; i < seedCount; i++) {
          gsap.delayedCall(gsap.utils.random(0, 1.2), spawnOne);
        }
        scheduleNext();
      } else {
        for (let i = 0; i < burstCount; i++) {
          burstSpawned++;
          gsap.delayedCall(gsap.utils.random(0, 2), spawnOne);
        }
      }

      return () => stop(true);
    }, container);
    
    return () => {
      gsapContext.current?.revert();
      gsapContext.current = null;
    };
  }, [strength, infinite]);

  return (
    <div ref={containerRef} className={className} data-snowflake-container data-strength={strength} data-infinite={infinite}>
      <div data-snowflake className="snowflake-el hidden"></div>
    </div>
  );
}
