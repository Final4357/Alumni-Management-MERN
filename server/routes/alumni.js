import express from 'express'
import { alumniDetailsById, alumniList } from '../controllers/alumniController.js'
import { verifyToken } from '../middlewares/auth.js'

const router = express.Router()

router.route('/list').get(alumniList)
router.get('/details/:id', verifyToken, alumniDetailsById)

export default router;