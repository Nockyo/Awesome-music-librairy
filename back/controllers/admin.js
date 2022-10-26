export const admin = (req, res) => {
    try{
        res.send(req.data)
    } catch (err) {
        res.status(400).send(err.message)
    }
}