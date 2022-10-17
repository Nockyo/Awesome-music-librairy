export const authentificateAdmin = (req, res, next) => {

    console.log('authentificateAdmin');     //a supprimer

    if(!req.data.data.admin) {
        return res.sendStatus(401)
    }

    next();
}