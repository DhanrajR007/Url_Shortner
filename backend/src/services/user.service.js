import tokenConfig from "../config/token.config.js";
import userDao from "../dao/user.dao.js";
import { BadRequestError, ConflictError } from "../utils/errorHandler.js";
import { getAvatar } from "../utils/helper.js";
export const registerUser = async (req) => {
  try {
    const { name, email, password } = req;
    if (!name || !email || !password) {
      throw new ConflictError("full details are requied");
    }
    const isUserAlreadyExists = await userDao.find_by_email(email);

    if (isUserAlreadyExists) {
      throw new BadRequestError("user already exists ");
    }
    const avatar = await getAvatar(email);
    const user = await userDao.createUser(name, email, password, avatar);
    const userId = user._id.toString();
    const token = await tokenConfig.signinToken(userId);
    return { user, token };
  } catch (err) {
    throw err;
  }
};
export const loginUser = async (req) => {
  try {
    const { email, password } = req;
    if (!email || !password) {
      throw new ConflictError("email & password is required");
    }
    const user = await userDao.loginUser(email, password);
    if (!user) {
      throw new BadRequestError("Invalid Credientials");
    }
    const userId = user._id.toString();
    const token = await tokenConfig.signinToken(userId);
    return { user, token };
  } catch (err) {
    throw err;
  }
};
