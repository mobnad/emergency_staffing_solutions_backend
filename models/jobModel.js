import { db } from "../config/dbConfig.js";
import { execQuery } from "../utils/dbUtil.js";

// CREATE: Function to create a new job listing
export const createJobMdl = function (jobData, callback) {
  const query = `
    INSERT INTO \`jobs\` (
        \`title\`,
        \`location\`,
        \`department\`,
        \`description\`,
        \`salary\`,
        \`posted_at\`
    ) VALUES (
        '${jobData.title}',
        '${jobData.location}',
        '${jobData.department}',
        '${jobData.description}',
        '${jobData.salary}',
        NOW()
    )
  `;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};

// READ: Function to get all job listings
export const getJobsMdl = function (callback) {
  const query = `SELECT * FROM jobs`;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};

// READ: Function to get a job listing by ID
export const getJobByIdMdl = function (id, callback) {
  const query = `SELECT * FROM jobs WHERE id = '${id}'`;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};

// UPDATE: Function to update a job listing
export const updateJobMdl = function (id, jobData, callback) {
  const query = `
    UPDATE jobs
    SET 
      title = '${jobData.title}',
      location = '${jobData.location}',
      department = '${jobData.department}',
      description = '${jobData.description}',
      salary = '${jobData.salary}'
    WHERE id = '${id}'
  `;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};

// DELETE: Function to delete a job listing
export const deleteJobMdl = function (id, callback) {
  const query = `DELETE FROM jobs WHERE id = '${id}'`;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};
