const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({ mssg: err})
}

module.exports = errorHandlerMiddleware
