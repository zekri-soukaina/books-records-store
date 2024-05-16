const checkQuery = (req, res, next) => {
  if (req.query.name === undefined) {
    res.status(400).send("Missing query name");
  } else {
    next();
  }
};

export default checkQuery;
