import { Router } from 'express';

import { checkHealth } from '../controllers/health.controller.js';

const router = Router();

router.route('/check').get(await checkHealth);

export default router;
