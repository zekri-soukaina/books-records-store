// Error handling middleware

const errorHandler = (err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
  res.status(500).json({
    // Send an error response to the client
    error: "Internal Server Error",
    message: "Something went wrong!",
  });
};

export default errorHandler;
