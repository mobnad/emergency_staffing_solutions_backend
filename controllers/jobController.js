import { 
    createJobMdl, 
    getJobsMdl, 
    getJobByIdMdl, 
    updateJobMdl, 
    deleteJobMdl 
} from "../models/jobModel.js";

// CREATE: Controller function to create a new job listing
export const createJobCtrl = (req, res) => {
    const jobData = req.body;

    createJobMdl(jobData, (err, results) => {
        if (err) {
            console.error('Error creating job listing:', err);
            return res.status(400).json({ status: 400, message: "Failed to create the job listing" });
        }
        
        res.status(201).json({ status: 201, message: "Job listing created successfully" });
    });
};

// READ: Controller function to get all job listings
export const getJobsCtrl = (req, res) => {
    getJobsMdl((err, results) => {
        if (err) {
            console.error('Error fetching job listings:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

// READ: Controller function to get a job listing by ID
export const getJobByIdCtrl = (req, res) => {
    const { id } = req.params;

    getJobByIdMdl(id, (err, results) => {
        if (err) {
            console.error('Error fetching job listing by ID:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

// UPDATE: Controller function to update a job listing by ID
export const updateJobCtrl = (req, res) => {
    const { id } = req.params;
    const jobData = req.body;

    updateJobMdl(id, jobData, (err, results) => {
        if (err) {
            console.error('Error updating job listing:', err);
            return res.status(400).json({ status: 400, message: 'Failed to update the job listing' });
        }

        res.status(200).json({ status: 200, message: 'Job listing updated successfully' });
    });
};

// DELETE: Controller function to delete a job listing by ID
export const deleteJobCtrl = (req, res) => {
    const { id } = req.params;

    deleteJobMdl(id, (err, results) => {
        if (err) {
            console.error('Error deleting job listing:', err);
            return res.status(400).json({ status: 400, message: 'Failed to delete the job listing' });
        }

        res.status(200).json({ status: 200, message: 'Job listing deleted successfully' });
    });
};
