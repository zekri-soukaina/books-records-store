const checkHeader = (req, res, next) => {
  if (req.get("X-Auth") === undefined) {
    res.status(400).send("Missing header X-Auth");
  } else {
    next();
  }
};

export default checkHeader;
