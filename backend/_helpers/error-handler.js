module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // erro da aplicação
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // erro de autenticação
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // caso erro não especificado, retornar código 500
    return res.status(500).json({ message: err.message });
}