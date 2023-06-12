import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { createJobPost, deleteJobPost, jobDetailsById, jobList, jobListCreateByOwn, updateJobPost } from '../controllers/jobController.js';

const router = express.Router()

router.route('/').post(verifyToken ,createJobPost)
router.route('/:id').put(verifyToken, updateJobPost)
router.route('/:id').delete(verifyToken, deleteJobPost)
router.route('/list').get(jobList)
router.route('/createdlist').get(verifyToken, jobListCreateByOwn)
router.route('/details/:id').get(jobDetailsById)

export default router;