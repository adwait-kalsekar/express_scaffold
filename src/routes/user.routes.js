import { Router } from 'express';

import { registerUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/register').get(await registerUser);

export default router;
