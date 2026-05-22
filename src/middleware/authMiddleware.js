import { decodeToken } from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "Unauthorized");
    }

    const token = authHeader.split(" ")[1];

    const decode = await decodeToken(token);

    req.user = decode

    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
