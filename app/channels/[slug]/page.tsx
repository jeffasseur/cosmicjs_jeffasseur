import { SingleChannel } from "@/cosmic/blocks/videos/SingleChannel";

const SingleChannelPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  return <SingleChannel query={{ slug: params.slug, type: "channels" }} />;
};

export default SingleChannelPage;
