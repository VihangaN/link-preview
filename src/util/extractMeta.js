export const extractMeta = (metaObj) => {
  if (metaObj.metadata) {
    const {
      title,
      "og:title": ogTitle,
      description,
      "og:description": ogdes,
      image,
      "og:image": ogImg,
      "twitter:image": twitterImg,
    } = metaObj.metadata;

    const metaTitle = title || ogTitle;
    const metaDes = description || ogdes;
    const metaImg = image || ogImg || twitterImg;

    return { metaTitle, metaDes, metaImg };
  }
};
