import { Router } from 'express';
import timelogController from '@controllers/timelog/timelog.controller';

const router: Router = Router();

router.post('/', timelogController.createFromWork);
router.patch('/:id', timelogController.updateToWork);
router.get('/', timelogController.getTimeLog);

export default router;
