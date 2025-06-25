export function getDirectDownloadLink(sharedLink: string): string | null {
  const match = sharedLink.match(/\/file\/d\/([a-zA-Z0-9_-]{25,})/);
  const fileId = match?.[1];

  return fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : null;
}
