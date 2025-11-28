import url_schema from "../models/shortUrl.model.js";

const newurl = (url, shorturl, user) => {
  const newurl = new url_schema({
    full_url: url,
    short_url: shorturl,
  });
  if (user) {
    newurl.user_id = user;
  }
  newurl.save();
};

const getshortUrl = async (id) => {
  const newid = await url_schema.findOneAndUpdate(
    { short_url: id },
    { $inc: { clicks: 1 } }
  );
  return newid;
};

export default { newurl, getshortUrl };
