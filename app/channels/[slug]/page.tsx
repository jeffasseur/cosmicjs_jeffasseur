import { SingleChannel } from "@/cosmic/blocks/videos/SingleChannel";

const SingleChannelPage = ({ params }: { params: { slug: string } }) => {
  return <SingleChannel query={{ slug: params.slug, type: "channels" }} />;
};

export default SingleChannelPage;
