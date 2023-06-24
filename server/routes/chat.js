import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { accessChat, fetchChat } from '../controllers/chatController.js'

const router = express.Router()

router.route('/').post(verifyToken, accessChat)
router.route('/').get(verifyToken, fetchChat)

export default router;