const { verifyJWT } = require('../middleware/jwt');
const appData = require('../models/schema/appData');

const api = require('express').Router();

api.get("/appID", async (req, res)=>{
    const cur_app = await appData.findOne()
    return res.status(200).json({clientAppId: cur_app.clientAppId})    
})

api.use("/tasks", require("../routes/tasks"))
api.use("/employee",verifyJWT, require("./../routes/userTask"));

module.exports = api