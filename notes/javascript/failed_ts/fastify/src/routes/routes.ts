// pages
import {getRoot} from "../controllers/pages/root.controller.ts";
import {getLoginPage} from "../controllers/pages/loginPage.controller.ts";
import {getDashboard} from "../controllers/pages/dashboard.controller.ts";
import {getRegisterPage} from "../controllers/pages/registerPage.controller.ts";
import {getDeletePage} from "../controllers/pages/deletePage.controller.ts";
import {getEditPage} from "../controllers/pages/editUserPage.controller.ts";

// controls
import {loginUser} from "../controllers/controls/login.controller.ts";
import {registerUser} from "../controllers/controls/register.controller.ts";
import {deleteUser} from "../controllers/controls/delete.controller.ts";
import {editUser} from "../controllers/controls/editUser.controller.ts";

// utils
import {dbChecker} from "../database/dbChecker.ts";

async function routes(fastify, options) {
	// get
	fastify.get('/', getRoot)
	fastify.get('/login', getLoginPage)
	fastify.get('/dashboard', getDashboard)
	fastify.get('/register', getRegisterPage)
	fastify.get('/delete', getDeletePage)
	fastify.get('/edit', getEditPage)

	// post
	fastify.post('/login', loginUser)
	fastify.post('/register', registerUser)
	fastify.post('/delete', deleteUser)
	fastify.post('/edit', editUser)

	// utils
	fastify.get('/dbChecker', dbChecker)
};

export default routes;