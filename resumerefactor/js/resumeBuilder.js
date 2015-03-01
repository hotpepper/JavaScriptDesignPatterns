
//---------------------JSON---------------
var work = {
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
	},
	{
		"employer": "DCP",
		"title": "College Aid",
		"location":"New York",
		"dates":"7/1/2004 - 12/31/2006",
		"description" : "Planner <br> Plan transportation projects and manage GIS datasets"
	}
	]
	//display: function taking no parameters
};


var projects = {
	"project": [
		{
			"title": "Project Number 1",
			"dates": "yesturday - today",
			"description": "awesome project that is temporarily represented by phillip j fry",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		},
		{
			"title": "roject Number 2",
			"dates": "today - tomorrow",
			"description": "yet another awesome project from seth",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		}
	]
};

var bio = {
	"name" : "Seth Hotpepper",
    	"role" : "role",
    	"contacts" : {
    		"mobile": "555-555-5555",
    		"email": "heyseth@hotmail.com",
    		"github": "https://github.com/hotpepper/",
    		"twitter": "@qns0709",
    		"location": "New York, New York"
    	},
    	"welcomeMessage": "Hello, chumps..." ,
    	"skills": ["GIS", "Python", "SQL", "HTML", "CSS","JavaScript"],
    	"biopic": "images/fry.jpg"
    	//display: function taking no parameters		
	};



var education = {
	"schools": [
		{
         "name": "Columbia",
         "location": "New York, NY",
         "degree": "Master of Science",
         "majors": "Urban Planning",
         "minors": ["Transportation"],
         "dates": 2007,
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
         "title": "JavaScript Basics",
         "school": "Udacity",
         "date": 2015,
         "url": "http://www.Udacity.com/"
     },
     {
         "title": "Intro to HTML and CSS",
         "school": "Udacity",
         "date": 2015,
         "url": "http://www.Udacity.com/"
     }
     ]
    //"display": function taking no 
};


//---------------------functions---------------
var displayWork = function() {
	//add work experience
	for (j in work.jobs) {
		$("#workExperience").append(
		HTMLworkStart );
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);

		$(".work-entry:last").append(
			HTMLworkEmployer.replace("%data%", formattedEmployer +
				formattedTitle+
				formattedLocation+
				formattedDates+
				formattedDescription
				)
			);
	};
};
//-------------------encapulste display function in projects------------------

projects.display = function() {
	for (p in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[p].dates);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.project[p].images[0])

		$(".project-entry:last").append(
			formattedTitle+
			formattedDescription+
			formattedDates
			);
		for (i in projects.project[p].images) {
			$(".project-entry:last").append(
				HTMLprojectImage.replace("%data%", projects.project[p].images[i])
				)
		}
		console.log(projects.project[p].description)
	}

	//HTMLprojectImage
};
projects.display();

bio.display = function() {
		//$("#header").append(HTMLcontactGeneric);
		$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));

	}

bio.display();




//----------------------------------------------------------
$("#header").prepend(HTMLbioPic.replace("%data%",bio.biopic));
//----------------------------------------------------------

//if skills are present, add to header
if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills) {//i=0; i < bio.skills.length; i++) {
		$("#skills").append(
			HTMLskills.replace("%data%", bio.skills[i])
			);
	};
};

displayWork();

//---------------------internationalize-----------------

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
var inName = function () {
	return bio.name.split(" ")[0]+" "+ bio.name.split(" ")[1].toUpperCase();
};
//add button
$("#main").append(internationalizeButton);

//-------------------log click X/Ys------------------
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//-----------------------map-------------------------
$("#mapDiv").append(googleMap);