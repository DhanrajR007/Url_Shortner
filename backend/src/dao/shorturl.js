import url_schema from "../models/shortUrl.model.js";

const newurl = async (url, shorturl, user) => {
  try {
    const data = new url_schema({
      full_url: url,
      short_url: shorturl,
    });
    if (user) {
      data.user = user;
    }

    await data.save();

    return data;
  } catch (err) {
    throw err;
  }
};

const getshortUrl = async (id) => {
  try {
    const newid = await url_schema.findOneAndUpdate(
      { short_url: id },
      { $inc: { clicks: 1 } }
    );
    return newid;
  } catch (err) {
    throw err;
  }
};

const getAllUrls = async (userId) => {
  try {
    const urls = await url_schema.find({ user: userId });
    return urls;
  } catch (err) {
    throw err;
  }
};

export default { newurl, getshortUrl, getAllUrls };
