import { VideoList } from "@/cosmic/blocks/videos/VideoList";

const VideoListPage = () => {
  return (
    <section className="container pb-8">
      <VideoList
        query={{ type: "videos" }}
        limit={10}
        skip={0}
        className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      />
    </section>
  );
};

export default VideoListPage;
