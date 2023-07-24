import express from 'express'
import { alumniDetailsById, alumniList, updateAlumni } from '../controllers/alumniController.js'
import { verifyToken } from '../middlewares/auth.js'

const router = express.Router()

router.route('/list').get(alumniList)
router.get('/details/:id', alumniDetailsById)
router.put('/:id', updateAlumni)


export default router;