const express = require('express');
const authMiddleware = require("../middlewares/auth.middleware")
const upload = require("../middlewares/file.middleware")
const interviewController = require("../controllers/interview.Controller")


const interviewRouter = express.Router()

/**
 * @route POST /api/interview/
 * @description generate new interview report on the basis of user self description,resume pdf and job description.
 * @access private
 */
interviewRouter.post("/",authMiddleware.authUser,uplode.single('resume'), interviewController.generateInterViewReportController)


module.exports = interviewRouter;
