const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if (err) {
                return reject(err);
            }
            return resolve(payload);
        });
    });
};

const protect = async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken || !bearerToken.startsWith("Bearer")) {
        return res
            .status(400)
            .json({ status: "Failed", message: "token is required" });
    }
    const token = bearerToken.split(" ")[1];
    const payload = await verifyToken(token);
    console.log("payload", payload);
    if (!payload) {
        return res
            .status(400)
            .json({ status: "Failed", message: "invalid token" });
    }
    req.user = payload;
    next();
};

module.exports = protect;