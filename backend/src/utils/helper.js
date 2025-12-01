import { nanoid } from "nanoid";
import { ConflictError } from "./errorHandler.js";
import md5 from "md5";

const getlength = (length) => {
  try {
    if (!length) {
      throw new ConflictError("length is requierd");
    }
    return nanoid(length);
  } catch (err) {
    throw err;
  }
};

export const getAvatar = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

export default getlength;
