export const authentificateAdmin = (req, res, next) => {
    
    if(!req.data.data.admin) {
        console.log('pas ok')
        return res.sendStatus(401).send('Unauthorized')
    }

    next();
}