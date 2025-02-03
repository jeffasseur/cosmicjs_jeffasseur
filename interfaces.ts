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
    };
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
}

export interface ServiceHighlightedProjectsInterface {
  project: string;
}
