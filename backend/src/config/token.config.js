import JWT from "jsonwebtoken";

const signinToken = (userId) => {
  try {
    return JWT.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  } catch (err) {
    throw err;
  }
};
const varifyToken = (payload) => {
  try {
    const t = JWT.verify(payload, process.env.JWT_SECRET);
    return t;
  } catch (err) {
    throw err;
  }
};

export default { signinToken, varifyToken };
