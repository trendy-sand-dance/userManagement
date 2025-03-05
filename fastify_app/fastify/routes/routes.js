// root 
import {getRoot} from "../controllers/root.controller.js";

// login
import {getLoginPage} from "../controllers/loginPage.controller.js";
import {loginUser} from "../controllers/login.controller.js";

// dashboard
import {getDashboard} from "../controllers/dashboard.controller.js";

// registration
import {getRegisterPage} from "../controllers/registerPage.controller.js";
import {registerUser} from "../controllers/register.controller.js";

// utils
import {dbChecker} from "../database/dbChecker.js";

async function routes(fastify, options) {
	// get
	fastify.get('/', getRoot)
	fastify.get('/login', getLoginPage)
	fastify.get('/dashboard', getDashboard)
	fastify.get('/register', getRegisterPage)

	// post
	fastify.post('/login', loginUser)
	fastify.post('/register', registerUser)

	// utils
	fastify.get('/dbChecker', dbChecker)
};

export default routes;