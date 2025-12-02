export const attachUser = async (req, res, next) => {
  const token = req.cookies.accesstoken;

  if (!token) return next();

  try {
    const decoded = Token.varifyToken(token);
    const user = await findUserById(decoded.id);

    if (!user) return next();

    req.user = user;
    next();
  } catch (error) {
    // token galat ya expired ho to cookie clean kar de
    res.clearCookie("accesstoken");
    next();
  }
};
