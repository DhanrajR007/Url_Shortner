import { nanoid } from "nanoid";
import { ConflictError } from "./errorHandler.js";

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

export default getlength;
