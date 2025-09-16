export type PageMetadata = {
  title: string;
  description: string;
  open_graph: {
    title: string;
    type: "website" | "article";
    image:
      | "pyq_pages_opengraph_image.jpg"
      | "pdf_viewer_pages_opengraph_image.jpg"
      | "page_fallback_opengraph_image.jpg";
  };
};
