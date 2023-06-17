import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { EventDetailsById, createEvent, deleteEvent, eventList, updateEvent } from '../controllers/eventController.js'

const router = express.Router()

router.route('/').post(verifyToken, createEvent)
router.route('/:id').put(verifyToken, updateEvent)
router.route('/:id').delete(verifyToken, deleteEvent)
router.route('/list').get(eventList)
router.route('/details/:id').get(EventDetailsById)

export default router;