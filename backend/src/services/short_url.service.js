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
const short_url_withUser = async (url, user) => {
  try {
    const shorturl = await getlength(7);
    await dao.newurl(url, shorturl, user);
    return shorturl;
  } catch (err) {
    throw err;
  }
};

export default {
  short_url_whithotUser,
  short_url_withUser,
};
