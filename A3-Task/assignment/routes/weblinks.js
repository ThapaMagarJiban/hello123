import express from 'express';
import {
  getAllWeblinks,
  getWeblinksByRating,
  getWeblinkById,
  createWeblink,
  updateWeblink,
  deleteWeblink,
} from '../controllers/weblinkController.js';

const router = express.Router();

router.get('/', getAllWeblinks);
router.get('/filter/rating', getWeblinksByRating);
router.get('/:id', getWeblinkById);
router.post('/', createWeblink);
router.put('/:id', updateWeblink);
router.delete('/:id', deleteWeblink);

export default router;