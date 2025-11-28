"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface ImageObject {
  image: {
    imgix_url: string;
    url: string;
  }
}

interface WorkMasonryProps {
  gallery: Array<ImageObject>;
}

const WorkMasonry = ({ gallery }: WorkMasonryProps) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry gutter="16px">
        {gallery.map(
          (image: ImageObject, index: number) => (
            <img
              key={index}
              src={`${image.image.imgix_url}?w=500&auto=format,compression`}
              alt={`Photo ${index + 1}`}
              className="w-full mb-4 rounded-lg object-cover"
            />
          )
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default WorkMasonry;