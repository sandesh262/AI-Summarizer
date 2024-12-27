const Summary = require('../models/Summary');

const createSummary = async (req, res) => {
  const { videoUrl, summaryText } = req.body;

  try {
    const newSummary = new Summary({
      userId: req.user.id,
      videoUrl,
      summaryText,
    });

    await newSummary.save();
    res.status(201).json(newSummary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getUserSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find({ userId: req.user.id });
    res.status(200).json(summaries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createSummary, getUserSummaries };
