declare module '*.avif' {
  const image: import('astro').ImageMetadata;
  export default image;
}

declare module '*.svg' {
  const image: import('astro').ImageMetadata;
  export default image;
}
