const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/products", [authJwt.verifyToken], controller.getProducts);
	app.get("/api/products/myroutine", [authJwt.verifyToken], controller.findAllSkinType);
};
