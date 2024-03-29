const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController.js');
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
router.put('/:id', courseController.update);
router.put('/delete/:id', courseController.delete);

module.exports = router;
