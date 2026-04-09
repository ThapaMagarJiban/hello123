import express from 'express';
import {
  getAllWeblinks,
  getWeblinksByRating,
  getDotComWeblinks,
  getWeblinkById,
  createWeblink,
  updateWeblink,
  deleteWeblink,
} from '../controllers/weblinkController.js';

const router = express.Router();

/**
 * @api {get} /weblinks Show all weblinks
 * @apiName GetAllWeblinks
 * @apiGroup Weblinks
 *
 * @apiSuccess {Object[]} weblinks List of weblinks.
 * @apiSuccess {Number} weblinks.id Weblink ID.
 * @apiSuccess {String} weblinks.title Weblink title.
 * @apiSuccess {String} weblinks.url Weblink URL.
 * @apiSuccess {Number} weblinks.rating Weblink rating.
 */
router.get('/', getAllWeblinks);

/**
 * @api {get} /weblinks/filter/rating?min=:min Display weblinks by rating
 * @apiName GetWeblinksByRating
 * @apiGroup Weblinks
 *
 * @apiParam {Number} [min=1] Minimum rating value.
 */
router.get('/filter/rating', getWeblinksByRating);

/**
 * @api {get} /weblinks/filter/com Display .com weblinks
 * @apiName GetDotComWeblinks
 * @apiGroup Weblinks
 *
 * @apiSuccess {Object[]} weblinks List of .com weblinks.
 */
router.get('/filter/com', getDotComWeblinks);

/**
 * @api {get} /weblinks/:id Show a specific web link
 * @apiName GetWeblinkById
 * @apiGroup Weblinks
 *
 * @apiParam {Number} id Weblink unique ID.
 */
router.get('/:id', getWeblinkById);

/**
 * @api {post} /weblinks Add a new weblink
 * @apiName CreateWeblink
 * @apiGroup Weblinks
 *
 * @apiBody {String} title Weblink title.
 * @apiBody {String} url Weblink URL.
 * @apiBody {Number} rating Weblink rating.
 */
router.post('/', createWeblink);

/**
 * @api {put} /weblinks/:id Update a weblink
 * @apiName UpdateWeblink
 * @apiGroup Weblinks
 *
 * @apiParam {Number} id Weblink unique ID.
 * @apiBody {String} [title] Updated weblink title.
 * @apiBody {String} [url] Updated weblink URL.
 * @apiBody {Number} [rating] Updated weblink rating.
 */
router.put('/:id', updateWeblink);

/**
 * @api {delete} /weblinks/:id Delete a weblink
 * @apiName DeleteWeblink
 * @apiGroup Weblinks
 *
 * @apiParam {Number} id Weblink unique ID.
 */
router.delete('/:id', deleteWeblink);

export default router;
