const paymentService = require('../service/paymentService');

const paymentInstance = new paymentService();

const startPayment = async(req, res)=>{
    try{
    const response = await paymentInstance.startPayment(req.body)
    res.status(200).json({
        status:"success",
        data: response
    })
}catch(error){
    res.status(500).json({
        status:'fail',
        message:error.message
    })
}
}

const createPayment = async(req, res)=>{
    try{
    const response = await paymentInstance.createPayment(req.query.references)
    res.status(200).json({
        status:"success",
        data: response
    })
}catch(error){
    res.status(500).json({
        status:'fail',
        message:error.message
    })
}

}

const getPayment = async(req, res)=>{
    try{
    const response = await paymentInstance.getPayment(req.body)
    res.status(200).json({
        status:"success",
        data: response
    })
}catch(error){
    res.status(500).json({
        status:'fail',
        message:error.message
    })
}
}

module.exports = {startPayment, createPayment, getPayment}