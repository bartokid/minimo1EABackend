import { Router } from 'express';
import serviceUser from '../services/serviceUser';
import authService from '../services/authService';

const router: Router = Router();

/**        PUBLIC USER API SERVICES             **/

// Register a user to the database.
router.post('/reg',serviceUser.registerUser);
// Verifies the credentials and turns the corresponding user
router.post('/log',serviceUser.login);

/**         AUTH0 REQUIRED USER API SERVICES         **/

// Returns the user matching with an id. Previously authenticates the query.
router.get('/getUserById',authService.authenticateJWT,serviceUser.getUserById);
// Returns the user matching by his name. Previously authenticates the query.
router.post('/get',authService.authenticateJWT,serviceUser.getUser);
// Given a user to update, the server returns the updated user. Previously authenticates the query.
router.put('/update', authService.authenticateJWT, serviceUser.updateUser);
//Returns all users from the db. Previously authenticates the query.
router.get('/all', authService.authenticateJWT, serviceUser.getAll);
// Given a user, it's deleted from the db. Previously authenticates the query.
router.delete('/del', authService.authenticateJWT, serviceUser.deleteUser)

export default router;
