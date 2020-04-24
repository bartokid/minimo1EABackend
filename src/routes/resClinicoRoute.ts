import { Router } from 'express';
import resClinicoService from '../services/serviceResClinico';

const router: Router = Router();

router.post('/addrandom', resClinicoService.addRandomResClinico);
router.get('/', resClinicoService.getResClinicos);
router.put('/update', resClinicoService.updateResClinico);

export default router;