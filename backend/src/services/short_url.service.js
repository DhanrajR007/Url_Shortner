import newurl from "../dao/shorturl.js";
import getlength from "../utils/helper.js";

const short_url_whithotUser = async (url) => {
  const shorturl = getlength(7);
  await newurl(url, shorturl);
  return shorturl;
};
const short_url_withUser = async (url, user) => {
  const shorturl = await getlength(7);
  await newurl(url, shorturl, user);
  return shorturl;
};

export default {
  short_url_whithotUser,
  short_url_withUser,
};
