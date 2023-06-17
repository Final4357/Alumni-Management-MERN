import express from 'express'
import { verifyToken } from '../middlewares/auth'
import { accessChat, fetchChat } from '../controllers/chatController'

const router = express.Router()

router.route('/').post(verifyToken, accessChat)
router.get('/', verifyToken, fetchChat)

export default router;