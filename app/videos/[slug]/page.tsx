import { SingleVideo } from "@/cosmic/blocks/videos/SingleVideo";
import * as React from "react";
import { cosmic } from "@/cosmic/client";
import { VideoType } from "@/cosmic/blocks/videos/VideoCard";

interface paramsInterace {
  params: Promise<{ slug: string }>;
}

const SingleVideoPage = async ({ params }: paramsInterace) => {
  const { slug } = await params;
  const { object: video }: { object: VideoType } = await cosmic.objects
      .findOne({ type: "videos", slug: slug })
      .props("id,slug,title,metadata,created_at")
      .depth(3)
      .status("published");
  return <SingleVideo video={ video } />;
};

export default SingleVideoPage;
