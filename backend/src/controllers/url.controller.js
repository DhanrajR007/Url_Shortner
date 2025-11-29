import shorturl from "../dao/shorturl.js";
import short_url from "../services/short_url.service.js";
import { BadRequestError, NotFoundError } from "../utils/errorHandler.js";

const createUrl = async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!req.body || !req.body.url) {
      throw new BadRequestError("URL is required");
    }
    const shorturlll = await short_url.short_url_whithotUser(url);
    res.send(process.env.APPURL + shorturlll);
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
