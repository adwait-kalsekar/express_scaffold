// const asyncHandler = async (requestHandler) => {
//   return async (req, res, next) => {
//     try {
//       await requestHandler(req, res, next);
//     } catch (err) {
//       res.status(err.statusCode || 500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// };

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
