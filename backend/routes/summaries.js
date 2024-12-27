const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Summary = require('../models/Summary');

// Get all summaries
router.get('/', async (req, res) => {
  try {
    // For testing, return mock data
    const mockSummaries = [
      {
        _id: '1',
        title: 'Test Article',
        content: 'This is a test summary.',
        originalUrl: 'https://example.com',
        createdAt: new Date()
      }
    ];
    res.json(mockSummaries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router; 