import dao from "../dao/shorturl.js";
import getlength from "../utils/helper.js";

const short_url_whithotUser = async (url) => {
  try {
    const shorturl = getlength(7);
    await dao.newurl(url, shorturl);
    return shorturl;
  } catch (err) {
    throw err;
  }
};
const short_url_withUser = async (url, user, slug) => {
  try {
    const shorturl = await getlength(7);
    const short_url = slug ? slug : shorturl;

    await dao.newurl(url, short_url, user);
    return short_url;
  } catch (err) {
    throw err;
  }
};

export default {
  short_url_whithotUser,
  short_url_withUser,
};
