const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createSummary, getUserSummaries } = require('../controllers/summaryController');

const router = express.Router();

router.post('/', authMiddleware, createSummary);
router.get('/', authMiddleware, getUserSummaries);

module.exports = router;
