import { cosmic } from "@/cosmic/client";

export default async function WorkFilterHandler(req: any, res: any) {
  const {
    query: { title, category },
  } = req;

  let queryParam = {};

  if (typeof title !== "undefined") {
    queryParam = {
      ...queryParam,
      title: {
        $regex: title,
        $options: "i",
      },
    };
  }

  if (typeof category !== "undefined") {
    queryParam = {
      ...queryParam,
      category: {
        $regex: category,
        $options: "i",
      },
    };
  }

  const params = {
    query: {
      ...queryParam,
      type: "projects",
    },
    props: "title,slug,metadata,created_at",
  };

  try {
    const { objects: projects } = await cosmic.objects
      .find({
        type: "projects",
      })
      .props("id,slug,title,metadata")
      .depth(1);
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}
