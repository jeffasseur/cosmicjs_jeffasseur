export interface ContentInterface {
  id: string;
  title: string;
  metadata: {
    description: string;
    seo: {
      description: string;
    };
  };
  slug: string;
}

export type ProjectType = {
  id: string;
  title: string;
  slug: string;
  metadata: {
    image: {
      imgix_url?: string;
    };
    summary: string;
    client: {
      title: string;
    };
    year: number;
    content: number;
    category: {
      title?: string;
    };
    service: {
      title?: string;
      slug?: string;
    };
    hero_video?: {
      url: string;
      imgix_url: string;
    };
    coming_soon?: boolean;
  };
};

export type Link = {
  url: string;
  company: string;
  icon: {
    imgix_url: string;
  };
};

export interface NavLinkInterface {
  title: string;
  link: string;
  published: boolean;
  open_in_new_tab: boolean;
}

export interface ServiceHighlightedProjectsInterface {
  project: string;
}

export type TestimonialType = {
  title: string;
  slug: string;
  metadata: {
    company: string;
    position: string;
    quote: string;
    image: {
      imgix_url: string;
    };
  };
};
