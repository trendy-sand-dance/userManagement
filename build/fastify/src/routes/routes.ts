import { FastifyInstance} from 'fastify';

// pages
import {getRoot} from "../controllers/pages/root.controller";
import {getLoginPage} from "../controllers/pages/loginPage.controller";
import {getDashboard} from "../controllers/pages/dashboard.controller";
import {getRegisterPage} from "../controllers/pages/registerPage.controller";
import {getDeletePage} from "../controllers/pages/deletePage.controller";
import {getEditPage} from "../controllers/pages/editUserPage.controller";

// controls
import {loginUser} from "../controllers/controls/login.controller";
import {registerUser} from "../controllers/controls/register.controller";
import {deleteUser} from "../controllers/controls/delete.controller";
import {editUser} from "../controllers/controls/editUser.controller";

// utils
import {dbChecker} from "../database/dbChecker";

async function routes(FastifyInstance) {
	// get
	FastifyInstance.get('/', getRoot)
	FastifyInstance.get('/login', getLoginPage)
	FastifyInstance.get('/dashboard', getDashboard)
	FastifyInstance.get('/register', getRegisterPage)
	FastifyInstance.get('/delete', getDeletePage)
	FastifyInstance.get('/edit', getEditPage)

	// post
	FastifyInstance.post('/login', loginUser)
	FastifyInstance.post('/register', registerUser)
	FastifyInstance.post('/delete', deleteUser)
	FastifyInstance.post('/edit', editUser)

	// utils
	FastifyInstance.get('/dbChecker', dbChecker)
};

export default routes;