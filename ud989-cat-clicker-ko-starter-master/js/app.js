var initialCats = [
	{
		name: "Cat1",
    	imgSrc: 'http://c2.staticflickr.com/2/1126/625069434_db86b67df8_b.jpg',
    	imgAttribution : "https://flicker.com",
    	clickCount: 0,
    	nickNames : ['Name1' ,'Name2', 'Name3'],
    	listPost: 0
    },
     {
    	name: "Cat2",
    	imgSrc: 'http://c3.staticflickr.com/3/2298/2290467335_89067c7b51_n.jpg',
    	imgAttribution : "https://flicker.com",
    	clickCount: 0,
    	nickNames : ['Name1' ,'Name2', 'Name3'],
    	listPost: 1
	},
	{
		name: "Cat3",
    	imgSrc: 'http://c4.staticflickr.com/4/3765/9126414150_0d9e1b840b_c.jpg',
    	imgAttribution : "https://flicker.com",
    	clickCount: 0,
    	nickNames : ['Name1' ,'Name2', 'Name3'],
    	listPost: 2
    },
    {
    	name: "Cat4",
    	imgSrc: 'http://c3.staticflickr.com/3/2082/2140091820_85f5cbe62f_n.jpg',
    	imgAttribution : "https://flicker.com",
    	clickCount: 0,
    	nickNames : ['Name1' ,'Name2', 'Name3'],
    	listPost: 3
    },
    {
    	name: "Cat5",
    	imgSrc: 'http://c4.staticflickr.com/8/7172/6759245781_7921be45e8_n.jpg',
    	imgAttribution : "https://flicker.com",
    	clickCount: 0,
    	nickNames : ['Name1' ,'Name2', 'Name3'],
    	listPost: 4
    }
]

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);
	this.listPost = ko.observable(data.listPost);
	//levels
	this.title = ko.computed(function() {
		var title = "Newborn";
		if (this.clickCount()<10){
			title = "Newborn"
		} else if (this.clickCount()<13){
			title = "Infant"
		} else if (this.clickCount()<32) {
			title = "Teen"
		} else {
			title ="Old man"
		}
        return title
    }, this);
};


var ViewModel = function() {
	//option for using self to step out of nested scope issuesand use this to rfer to view model
	//var self = this; //and then can ue self.thing to get out to vm
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	var displayCat = 2;
	this.currentCat = ko.observable(this.catList()[displayCat]);

	this.setCat = function(clickedCat){
		self.currentCat(clickedCat)

	}
		
	

	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
		//this.clickCount( this.clickCount() + 1 );
		console.log(self.displayCat)
	};
};

ko.applyBindings(new ViewModel());





