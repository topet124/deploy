import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    throw new UnauthenticatedError("authentication invalid token based");

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "66e64906f265b9a66020daad";
    req.user = { userId, role, testUser };

    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid user");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
