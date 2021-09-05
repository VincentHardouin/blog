export function getMediaUrl(url) {
  if (url.startsWith('/')) {
    return `${process.env.BASE_URL}${url}`;
  }
  return url;
}
