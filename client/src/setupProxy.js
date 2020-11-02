const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      [
        "/user",
        "/auth",
        "/contests",
        "/profile",
        "/posts",
        "/post/:id",
        "/contestDesc/:id",
      ],
      {
        target: "http://localhost:5000",
      }
    )
  );
};
