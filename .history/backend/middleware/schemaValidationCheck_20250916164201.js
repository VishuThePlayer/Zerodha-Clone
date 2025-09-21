module.exports.validateSchema = (schema) => {
    return (req, res, next) => {
        const {error} = schema.validation(req.body);
        if(error){
            return res.status(400).json({message: error.details[0].message});
        }
        next
    }
}