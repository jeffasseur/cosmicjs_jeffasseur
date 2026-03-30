import './styles.css';

const WhatsappBubble = () => {
  return (
    <a id="wa-bubble" className="fixed bottom-8 right-8 z-[9999] flex items-center gap-4 cursor-pointer" href="https://wa.me/470013282" target="_blank" rel="noopener">
      <span id="wa-label" className="bg-white py-2 px-4 rounded-md text-sm font-medium">Quick chat</span>
      <div id="wa-btn" className="w-[56px] h-[56px] bg-[#25D366] rounded-full flex item-center justify-center">
        <svg viewBox="0 0 32 32">
          <g>
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M24.16 20.67c-.35-.17-2.08-1.02-2.4-1.14-.32-.12-.55-.17-.77.17-.22.31-.88 1.15-1.08 1.38-.2.24-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.77-1.04-.93-1.74-2.09-1.94-2.44-.2-.35-.02-.54.15-.71.16-.16.35-.4.53-.62.18-.21.23-.36.35-.6.12-.23.06-.44-.03-.62-.09-.18-.77-1.85-1.06-2.54-.28-.67-.59-.57-.8-.58l-.68-.01c-.25 0-.63.09-.96.43-.33.34-1.25 1.22-1.25 2.96s1.28 3.43 1.46 3.67c.18.24 2.51 3.98 6.09 5.43.85.36 1.51.58 2.02.74.85.27 1.63.23 2.24.14.68-.1 2.08-.85 2.38-1.68.29-.85.29-1.58.2-1.73-.09-.15-.33-.24-.68-.41zm-8.2-6.51c.24 0 .44-.2.44-.44s-.2-.44-.44-.44-.44.2-.44.44.2.44.44.44z"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </a>
  );
}

export default WhatsappBubble;
