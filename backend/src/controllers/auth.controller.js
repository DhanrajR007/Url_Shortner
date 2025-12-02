import { registerUser, loginUser } from "../services/user.service.js";




const login_user = async (req, res) => {
  const { user, token } = await loginUser(req.body);
  res.cookie("accesstoken", token, {
    httpOnly: true,
    secure: false, // true in production (https)
    sameSite: "lax",
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
  });
  res.status(200).json({
    user:user,
    message: "user created Succesfully",
  });
};

export default { login_user, registeruser };
