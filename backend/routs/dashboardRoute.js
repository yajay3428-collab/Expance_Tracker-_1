
import express from 'express';

import { getDashboardOverview } from '../controllers/dashboardcomntroller.js';
import { authMiddlewere} from '../middleware/auth.js';




const dashboardRouter = express.Router();


dashboardRouter.get("/",authMiddlewere, getDashboardOverview);

export default dashboardRouter;
