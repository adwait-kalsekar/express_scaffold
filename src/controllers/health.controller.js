import asyncHandler from '../services/asyncHandler.js';

const checkHealth = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Server Up and Running!',
  });
});

export { checkHealth };
