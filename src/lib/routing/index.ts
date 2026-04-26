import { toOrdinal } from '@/lib/text_manipulation/number_manipulation';

export type BreadcrumbItem = {
  label: string;
  link: string;
};

function dynamic_map(segment: string, i: number) {
  switch (i) {
    case 4:
      return segment.toUpperCase().replaceAll('_', ' ');
    case 5:
      return toOrdinal(Number(segment));
    case 6:
      return segment.replaceAll('_', ' ');
    case 7:
      return segment.toUpperCase();
    default:
      return segment;
  }
}

export function generate_breadcrumb_links(url: URL): BreadcrumbItem[] {
  const segments = url.pathname.split('/').filter(Boolean);

  let current_link = '';

  return segments
    .map((segment, i) => {
      current_link += '/' + segment;

      return {
        label: dynamic_map(segment, i),
        link: url.origin + current_link,
      } satisfies BreadcrumbItem;
    })
    .slice(1);
}
