import express from 'express'
import { addAdmin, adminList, alumniList, deleteUser, studentList, updateUser, userDetailsById } from '../controllers/userController.js'
import { verifyAdmin, verifyToken } from '../middlewares/auth.js'
import { uploadPhoto } from '../middlewares/uploadImage.js';

const router = express.Router()

router.route('/addAdmin').post(verifyToken, verifyAdmin, uploadPhoto.single('photo'), addAdmin)
router.route('/details/:id').get(verifyToken, userDetailsById)
router.route('/:id').put(verifyToken, verifyAdmin, uploadPhoto.single('photo'), updateUser)
router.route('/:id').delete(verifyToken, verifyAdmin, deleteUser)

router.route('/alumniList').get(alumniList)
router.route('/studentList').get(verifyToken, verifyAdmin, studentList)
router.route('/adminList').get(verifyToken, verifyAdmin, adminList)

export default router;