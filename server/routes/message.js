import express from 'express'
import { verifyToken } from '../middlewares/auth'
import { fetchAllMsg, sendMessage } from '../controllers/messageController'

const router = express.Router()

router.route('/').post(verifyToken, sendMessage)
router.route('/:chatId').get(verifyToken, fetchAllMsg)

export default router