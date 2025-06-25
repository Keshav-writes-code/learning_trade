export type ExplorerItem =
  | {
      type: "folder";
      label: string | number;
      link: string | number;
    }
  | {
      type: "file";
      label: string | number;
      link: string | number;
      file_type: File_type;
      download_link: string;
    };

export type Item_type = "folder" | "file";
export type File_type = "pdf" | "image";
