import express from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth.js'
import { EventDetailsById, createEvent, deleteEvent, eventList, updateEvent } from '../controllers/eventController.js'

const router = express.Router()

router.route('/').post(verifyToken, verifyAdmin, createEvent)
router.route('/:id').put(verifyToken, verifyAdmin, updateEvent)
router.route('/:id').delete(verifyToken, verifyAdmin, deleteEvent)
router.route('/list').get(eventList)
router.route('/details/:id').get(EventDetailsById)

export default router;