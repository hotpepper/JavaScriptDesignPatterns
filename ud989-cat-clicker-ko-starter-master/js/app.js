
var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
	this.imgAttribution = ko.observable("https://flicker.com");

	//levels
	this.level = ko.computed(function() {
		var level = "Newborn";
		if (this.clickCount()<10){
			level = "Newborn"
		} else if (this.clickCount()<13){
			level = "Infant"
		} else if (this.clickCount()<32) {
			level = "Teen"
		} else {
			level ="Old man"
		}
        return level
    }, this);

	//adding nick names 
	this.nickNames =  {
		names: [
            { firstName: 'Name1' },
            { firstName: 'Name2'},
            { firstName: 'Name3'}
        ]
    }
};


var ViewModel = function() {
	//option for using self to step out of nested scope issuesand use this to rfer to view model
	//var self = this; //and then can ue self.thing to get out to vm
	this.currentCat = ko.observable(new Cat())
	this.incrementCounter = function(){
		this.clickCount( this.clickCount() + 1 );
	};
};

ko.applyBindings(new ViewModel());





