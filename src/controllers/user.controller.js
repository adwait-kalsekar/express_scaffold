import asyncHandler from '../services/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Register Route',
  });
});

export { registerUser };
