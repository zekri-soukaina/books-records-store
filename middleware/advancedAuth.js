import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
  audience: "{yourApiIdentifier}", // e.g. https://book-store-api
  issuerBaseURL: `https://{yourDomain}/`,
});

export default authMiddleware;
