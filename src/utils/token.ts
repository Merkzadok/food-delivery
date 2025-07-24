import jwt from "jsonwebtoken";
const secret = "super-secret-123";

export const verify = (token: string) => {
  const isVerified = jwt.verify(token, secret) as jwt.JwtPayload;
  return isVerified;
};

export const createAccessToken = (data: UserType) => {
  const hour = Math.floor(Date.now() / 1000) + 60 * 60;

  const accessToken = jwt.sign({ exp: hour, data }, secret);
  return accessToken;
};
