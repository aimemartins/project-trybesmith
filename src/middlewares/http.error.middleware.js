const httpErrorMiddleware = (err, req, res, next) => {
  console.log('err', err);
  const { status, message } = err;
  res.status(status || 500).json({ message });
  next();
};

export default httpErrorMiddleware;