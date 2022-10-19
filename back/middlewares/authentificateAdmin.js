export const authentificateAdmin = (req, res, next) => {
    
    if(!req.data.data.admin) {
        return res.sendStatus(401)
    }

    next();
}