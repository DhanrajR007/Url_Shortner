import userModel from "../models/auth.model.js";

const find_by_email = async (email) => {
  try {
    const result = await userModel.findOne({ email });
    return result;
  } catch (err) {
    throw err;
  }
};

export const findUserById = async (id) => {
  return await userModel.findById(id);
};
const createUser = async (name, email, password, avatar) => {
  try {
    const user = userModel.create({
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    });
    return user;
  } catch (err) {
    throw err;
  }
};

const loginUser = async (email, password) => {
  try {
    const user = userModel.findOne({
      email: email,
      password: password,
    });
    return user;
  } catch (err) {
    throw err;
  }
};
export default { find_by_email, createUser, loginUser };
