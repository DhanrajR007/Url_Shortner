import { get } from "mongoose";
import { registerUser, loginUser } from "../services/user.service.js";




const login_user = async (req, res) => {
  const { user, token } = await loginUser(req.body);
  res.cookie("accesstoken", token, {
    httpOnly: true,
    secure: false, // true in production (https)
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days

  });

  res.status(200).json({
    user,
    message: "user login Succesfully",
  });
};
const registeruser = async (req, res) => {
  const { user, token } = await registerUser(req.body);

  res.cookie("accesstoken", token, {
    httpOnly: true,
    secure: false, // true in production (https)
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  res.status(200).json({
    user:user,
    message: "user created Succesfully",
  });
};
 const getcurrentuser=async (req,res)=>{
  res.status(200).json({
    user: req.user,
    message: "user fetched successfully",
  });
}

export default { login_user, registeruser ,getcurrentuser };
