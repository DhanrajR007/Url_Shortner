import tokenConfig from "../config/token.config.js";
import { findUserById } from "../dao/user.dao.js";

export const attachUser = async (req, res, next) => {
  const token = req.cookies.accesstoken;
  
  if (!token) return next();

  try {
    const decoded = tokenConfig.varifyToken(token);
    const user = await findUserById(decoded);
    if (!user) return next();

    req.user = user;
    next();
  } catch (error) {
    // token galat ya expired ho to cookie clean kar de
    res.clearCookie("accesstoken");
    next();
  }
};
