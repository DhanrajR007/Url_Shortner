import { BadRequestError } from "../utils/errorHandler.js";
import dao from "../dao/shorturl.js";

export const getAllUrls = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new BadRequestError("Unauthorized");
  }
  try {
    const urls = await dao.getAllUrls(user.id);
    return res.status(200).json({ urls });
  } catch (error) {
    throw error;
  }
};
