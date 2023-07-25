import express from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth.js'
import { uploadPhoto } from '../middlewares/uploadImage.js';
import { NewsDetailsById, createNews, deleteNews, newsList, updateNews } from '../controllers/newsController.js';

const router = express.Router()

router.route('/').post(verifyToken, verifyAdmin, uploadPhoto.single('photo'), createNews)
router.route('/:id').put(verifyToken, verifyAdmin, uploadPhoto.single('photo'), updateNews)
router.route('/:id').delete(verifyToken, verifyAdmin, deleteNews)
router.route('/list').get(newsList)
router.route('/details/:id').get(verifyToken, verifyAdmin, NewsDetailsById)

export default router;