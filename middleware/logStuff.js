const logStuff = (req, res, next) => {
  console.log(
    `Protocol: ${req.protocol} \nHost: ${req.get("host")} \nURL: ${
      req.originalUrl
    }`
  );
  next();
};
export default logStuff;
