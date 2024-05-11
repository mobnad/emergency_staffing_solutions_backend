import express from "express";
import { 
    createJobCtrl, 
    getJobsCtrl, 
    getJobByIdCtrl, 
    updateJobCtrl, 
    deleteJobCtrl 
} from '../controllers/jobController.js';

const route = express.Router();

route.post("/job", createJobCtrl); // Route to create a new job listing
route.get("/jobs", getJobsCtrl); // Route to get all job listings
route.get("/jobs/:id", getJobByIdCtrl); // Route to get a job listing by ID
route.put("/updatejob/:id", updateJobCtrl); // Route to update a job listing by ID
route.post("/deletejob/:id", deleteJobCtrl); // Route to delete a job listing by ID

export default route;
