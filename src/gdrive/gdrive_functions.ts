
export function make_gApis_from_gDrvie_link(gdrive_link: string, api: string) {
  const match = gdrive_link.match(/\/file\/d\/([a-zA-Z0-9_-]{25,})/);
  const fileId = match ? match[1] : null;
  return `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${api}`;
}
export function getDirectDownloadLink(sharedLink: string): string | null {
  const match = sharedLink.match(/\/file\/d\/([a-zA-Z0-9_-]{25,})/);
  const fileId = match?.[1];

  return fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : null;
}
