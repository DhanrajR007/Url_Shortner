import tokenConfig from "../config/token.config.js";
import { BadRequestError } from "../utils/errorHandler.js";
const varifyUser = (req, res, next) => {
  try {
    const token = req.cookies.accesstoken;
    if (!token) {
      throw new BadRequestError("Please login first");
    }
    const isvalidUser = tokenConfig.varifyToken(token);

    next();
  } catch (err) {
    throw err;
  }
};
export default {
  varifyUser,
};
