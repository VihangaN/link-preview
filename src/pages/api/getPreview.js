import urlMetadata from "url-metadata";

const getPreview = async (req, res) => {
  const { url } = JSON.parse(req.body);
  console.log(url);
  urlMetadata(url).then(
    (metadata) => {
      console.log(metadata);
      res.status(200).json({ metadata });
    },
    (err) => {
      res.status(500).send(err);
    }
  );
};

export default getPreview;
