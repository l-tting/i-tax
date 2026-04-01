let person = {
    name:"Jane",
    work_info: {
        role:"Cloud Engineer",
        level:"Senior II",
        salary:300000 ,
        previous_jobs:{ first_job:"AWS",second_job:"Mastecard" }}
}


// console.log(person.work_info.previous_job.second_job)
console.log(person?.work_info?.previous_job?.second_job)

// optionalchaining.js:11 Uncaught TypeError: Cannot read properties of undefined (reading 'second_job')