// Middleware for user and password authorization
const authorize = (req, res, next) => {
  const { username, password } = req.headers;
  // Check if the username and password match
  if (username === "admin" && password === "secret") {
    // Authorization successful
    next();
  } else {
    // Authorization failed
    res.status(401).send("Unauthorized");
  }
};

export default authorize;
