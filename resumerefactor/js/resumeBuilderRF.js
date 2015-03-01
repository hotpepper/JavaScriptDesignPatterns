var model = {
	"work" : {
		"jobs": [
		{
			"employer": "DOT",
			"title": "City Planner",
			"location":"New York",
			"dates":"8/1/2009 - Present",
			"description" : "Senior Analyst <br>Play with data on maps, in databases, and in code."
		},
		{
			"employer": "DCP",
			"title": "City Planner",
			"location":"New York",
			"dates":"1/1/2007 - 7/31/2009",
			"description" : "Planner <br> Plan transportation projects and manage GIS datasets"
		}
		]
	},
	projects:{
		"project": [
		{
			"title": "Project Number 1",
			"dates": "yesturday - today",
			"description": "awesome project that is temporarily represented by phillip j fry",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		},
		{
			"title": "Project Number 2",
			"dates": "today - tomorrow",
			"description": "yet another awesome project from seth",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		}
		]
	},
	bio:{
		"name" : "Seth Hotpepper",
    	"role" : "GIS Analyst",
    	"contacts" : {
    		"mobile": "555-555-5555",
    		"email": "heyseth@hotmail.com",
    		"github": "https://github.com/hotpepper/",
    		"twitter": "@qns0709",
    		"location": "New York, New York"
    	},
    	"welcomeMessage": "Plays with data, mostly geospatial." ,
    	"skills": ["GIS", "Python", "SQL", "HTML", "CSS","JavaScript"],
    	"biopic": "images/fry.jpg"
	},
	education:{
		"schools": [
		{
			"name": "Columbia University",
			"location": "New York, NY",
			"degree": "Master of Science",
			"majors": "Urban Planning",
			"minors": ["Transportation"],
			"dates": 2007,
			"url": "http://www.columbia.edu/"
     	},
     	{
			"name": "New School University",
			"location": "New York, NY",
			"degree": "Master of Science (Incompleate)",
			"majors": "Urban Policy and Management",
			"minors": ["Transportation"],
			"dates": 2005,
			"url": "http://www.columbia.edu/"
     	},
     	{
     		"name": "SUNY Buffalo",
     		"location": "Buffalo, NY",
     		"degree": "Bachlor of Arts",
     		"majors": "Urban Planning",
     		"minors": ["Spanish","Japanese"],
     		"dates": 2004,
     		"url": "http://www.buffalo.edu/"
     	}
     	],
     	"onlineCourses":
     	[
     	{
	     	"title": "JavaScript Design Patterns",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	      {
	     	"title": "Intro to AJAX",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	     {
	     	"title": "Intro to jQuery",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	     {
	     	"title": "JavaScript Basics",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	     {
	     	"title": "HTML5 Canvas",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	     {
	     	"title": "Intro to HTML and CSS",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },	    
	     {
	     	"title": "Intro to Hadoop and MapReduce",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	     
	     
	     {
	     	"title": "Programming Foundations with Python",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "http://www.Udacity.com/"
	     },
	    
	     {
	     	"title": "Intro to Algorithms",
	        "school": "Udacity",
	        "date": 2013,
	        "url": "http://www.Udacity.com/"
	     },
	      {
	     	"title": "Intro to Computer Science",
	        "school": "Udacity",
	        "date": 2013,
	        "url": "http://www.Udacity.com/"
	     }
	     ]
    //"display": function taking no 
	}
};

var controller = {
	getBio: function(){
		return model.bio;
	},
	workLength: function(){
		return	model.work.jobs.length;
	},
	formatWork: function(job){
		console.log("adding job: "+ model.work.jobs[job].employer)
		return HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer) +
			HTMLworkTitle.replace("%data%", model.work.jobs[job].title)+
			HTMLworkLocation.replace("%data%", model.work.jobs[job].location)+
			HTMLworkDates.replace("%data%", model.work.jobs[job].dates)+
			HTMLworkDescription.replace("%data%", model.work.jobs[job].description)
	},
	schoolLength: function(){
		return	model.education.schools.length;
	},
	formatSchool: function(school){
		console.log("adding school: "+  model.education.schools[school].name)
		return HTMLschoolName.replace("%data%", model.education.schools[school].name) +
			HTMLschoolDegree.replace("%data%", model.education.schools[school].degree)+
			HTMLschoolDates.replace("%data%", model.education.schools[school].dates)+
			HTMLschoolLocation.replace("%data%", model.education.schools[school].location)+
			HTMLschoolMajor.replace("%data%", model.education.schools[school].majors)+
			HTMLschoolMinor.replace("%data%", model.education.schools[school].minors)
	},

	onlineLength: function(){
		return	model.education.onlineCourses.length;
	},
	formatOnline: function(c){
		console.log("adding class: "+  model.education.onlineCourses[c].name)
		return HTMLonlineTitle.replace("%data%", model.education.onlineCourses[c].title).replace("#", model.education.onlineCourses[c].url)+
			HTMLonlineSchool.replace("%data%", model.education.onlineCourses[c].school)+
			HTMLonlineDates.replace("%data%", model.education.onlineCourses[c].date)
			+"<br>"
			//+HTMLonlineURL.replace("%data%", model.education.onlineCourses[c].url)
	},


	projectLength: function(){
		return	model.projects.project.length;
	},
	formatProjects: function(p){
		console.log("adding project: "+  model.projects.project[p].title)
		return HTMLprojectTitle.replace("%data%", model.projects.project[p].title)+
			HTMLprojectDates.replace("%data%", model.projects.project[p].dates)+
			HTMLprojectDescription.replace("%data%", model.projects.project[p].description)+
			HTMLprojectImage.replace("%data%", model.projects.project[p].images[0])
			//+HTMLprojectImage.replace("%data%", model.projects.project[p].images[1])
	}
};

var view = {
	showBio: function(){
		var b = controller.getBio();
		//console.log(b);
		$("#header").append(HTMLheaderName.replace("%data%", b.name));
		$("#header").append(HTMLheaderRole.replace("%data%", b.role));
		$("#header").append(HTMLWelcomeMsg.replace("%data%", b.welcomeMessage));

		$("#header").append(HTMLmobile.replace("%data%", b.contacts.mobile));
		$("#header").append(HTMLemail.replace("%data%", b.contacts.email));
		$("#header").append(HTMLgithub.replace("%data%", b.contacts.github));
		$("#header").append(HTMLlocation.replace("%data%", b.contacts.location));
		

	},
	showWork: function(){
		for (i = 0; i < controller.workLength(); i++){
			$("#workExperience").append(HTMLworkStart );
			$(".work-entry:last").append(controller.formatWork(i))
		}
		
	},
	showSchool: function(){
		for (i=0;i<controller.schoolLength();i++){
			$("#education").append(HTMLschoolStart );
			$(".education-entry:last").append(controller.formatSchool(i))
		}
	},
	showProjects: function(){
		for (i=0; i<controller.projectLength();i++){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(controller.formatProjects(i))
		}
	},
	showOnline: function(){
		$(".education-entry:last").append(HTMLonlineClasses)
		for (i=0; i<controller.onlineLength();i++){
			$(".education-entry:last").append(controller.formatOnline(i))
		}
	},
	render: function(){
		this.showBio();
		this.showWork();
		this.showSchool();
		this.showOnline();
		this.showProjects();
	}
};

view.render();
