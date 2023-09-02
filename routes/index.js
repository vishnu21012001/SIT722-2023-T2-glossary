var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': 'ID#', 'Term': 'Term', 'Description': 'Description' , 'Reference': 'Reference'},
{ 'id': 1, 'Term': 'Agile approaches', 'Description': 'Agile approaches in software deployment are methodologies and practices that prioritize flexibility, collaboration, and iterative development to deliver software more efficiently and effectively.' , 'Reference': 'Altvater, A. (2023, March 5). What is Agile Methodology? Tools, Best Practices & More. Stackify. https://stackify.com/agile-methodology'},
{ 'id': 2, 'Term': 'Shift-left', 'Description': 'Quality is everyones responsibility. Also, Automation speeds up testing' , 'Reference': 'Gunja, S. (2022, October 27). Shift left vs shift right: A DevOps mystery solved. Dynatrace News. https://www.dynatrace.com/news/blog/what-is-shift-left-and-what-is-shift-right'},
{ 'id': 3, 'Term': 'DevOps', 'Description': 'Bridge the gap between development and IT operations, DevOps emphasizes shared responsibility.' , 'Reference': 'Kawaguchi, S. (2022, February 12). The Wall of Confusion. Medium. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26'},
{ 'id': 4, 'Term': 'Bootstrapping Microservices', 'Description': 'It involves creating the foundational components, such as service templates, containers, and orchestration configurations, to enable the development, deployment, and management of microservices. Bootstrapping is a critical step in launching a microservices' , 'Reference': 'Davis, A author. 2021, ‘Bootstrapping Microservices with Docker, Kubernetes, and Terraform / Davis, Ashley’, viewed 11 July 2022'},
{ 'id': 5, 'Term': 'cloud computing', 'Description': 'It enables access to shared pool of computing resources, offers a wide range of options for hosting applications and data.' , 'Reference': 'What Is Cloud Computing? | Microsoft Azure. (n.d.). What Is Cloud Computing? | Microsoft Azure. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-cloud-computing'},
{ 'id': 6, 'Term': 'Kubernetes', 'Description': 'It isa open source container platform, makes container managing easier, crucial tool for app deployment.' , 'Reference': 'Production-Grade Container Orchestration. (n.d.). Kubernetes. https://kubernetes.io/'},
{ 'id': 7, 'Term': 'Version control', 'Description': 'manages changes to files and code over time, provide a structured and organized approach to software development.' , 'Reference': 'A. (n.d.). What is version control | Atlassian Git Tutorial. Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control'},
{ 'id': 8, 'Term': 'Automation', 'Description': 'It streamline tasks such as code builds, testing, configuration management, and deployment to production environments.' , 'Reference': 'What is automation? | IBM. (n.d.). What Is Automation? | IBM. https://www.ibm.com/topics/automation'},
{ 'id': 9, 'Term': 'Continuous testing', 'Description': 'It ensures that code is continuously validated for quality, functionality, and performance, providing rapid feedback to developers. Continuous testing is the key component.' , 'Reference': 'DevOps & Continuous Testing. (n.d.). QuerySurge. https://www.querysurge.com/solutions/querysurge-for-devops'},
{ 'id': 10, 'Term': 'Scalability', 'Description': 'refers to the ability of a system, application, or infrastructure to handle increased workloads or user demands effectively. It involves designing and configuring systems to accommodate growing loads without significant performance degradation or the need for a complete overhaul' , 'Reference': 'What is Cloud Scalability? | Cloud Scale | VMware. (n.d.). VMware. https://www.vmware.com/topics/glossary/content/cloud-scalability.html'},

];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'my website showing a collection of DevOps terms and their brief description', names: nameList  });
});

module.exports = router;
