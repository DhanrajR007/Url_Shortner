import shorturl from "../dao/shorturl.js";

import short_url from "../services/short_url.service.js";

const createUrl = (req, res) => {
  const { url } = req.body;

  short_url.short_url_whithotUser(url);
  res.send(process.env.APPURL + shorturl);
};

const getUrl = async (req, res) => {
  const { id } = req.params;
  const url = await shorturl.getshortUrl(id);
  if (url) {
    res.redirect(url.full_url);
  } else {
    console.log("something went wrong");
  }
};

export default { createUrl, getUrl };
