const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/user", "/auth", "/contests", "/profile"], {
      target: "http://localhost:5000",
    })
  );
};
