import {Router} from 'express';
import resClinicoRoute from './resClinicoRoute'
const router:Router = Router();


router.use('/resclinico', resClinicoRoute)

export default router;



