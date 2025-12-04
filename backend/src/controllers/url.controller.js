import shorturl from "../dao/shorturl.js";
import short_url from "../services/short_url.service.js";
import { BadRequestError, NotFoundError } from "../utils/errorHandler.js";

const createUrl = async (req, res, next) => {
   const { url, slug } = req.body;
    if (!req.body || !req.body.url) {
      throw new BadRequestError("URL is required");
    }
  try {
   
    const user = req.user ? req.user._id : null;
    let shorturl;
    if (user) {
      shorturl = await short_url.short_url_withUser(url, user, slug);
    } else {
      shorturl = await short_url.short_url_whithotUser(url);
    }
    res.send(process.env.APPURL + shorturl);
  } catch (err) {
    next(err);
  }
};

const getUrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const url = await shorturl.getshortUrl(id);
    if (!url) {
      throw new NotFoundError("URL not found");
    }
    res.redirect(url.full_url);
  } catch (err) {
    next(err);
  }
};

export default { createUrl, getUrl };
