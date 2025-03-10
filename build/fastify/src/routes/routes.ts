// pages
import {getRoot} from "../controllers/pages/root.controller.js";
import {getLoginPage} from "../controllers/pages/loginPage.controller.js";
import {getDashboard} from "../controllers/pages/dashboard.controller.js";
import {getRegisterPage} from "../controllers/pages/registerPage.controller.js";
import {getDeletePage} from "../controllers/pages/deletePage.controller.js";
import {getEditPage} from "../controllers/pages/editUserPage.controller.js";

// controls
import {loginUser} from "../controllers/controls/login.controller.js";
import {registerUser} from "../controllers/controls/register.controller.js";
import {deleteUser} from "../controllers/controls/delete.controller.js";
import {editUser} from "../controllers/controls/editUser.controller.js";

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