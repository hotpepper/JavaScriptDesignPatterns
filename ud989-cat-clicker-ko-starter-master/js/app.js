

var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
	this.imgAttribution = ko.observable("https://flicker.com");

	//levels
	this.level = ko.computed(function() {
		var level = "Newborn";
		if (this.clickCount()<10){
			level = "Newborn"
		} else if (this.clickCount()>9 && this.clickCount()<13){
			level = "Infant"
		} else if (this.clickCount()>12 && this.clickCount()<32) {
			level = "Teen"
		} else {
			level ="Old man"
		}
        return level
    }, this);


	this.incrementCounter = function(){
		this.clickCount( this.clickCount() + 1 );
	};

	//adding nick names 
	this.nickNames =  {
		people: [
            { firstName: 'Name1' },
            { firstName: 'Name2'},
            { firstName: 'Name3'}
        ]
    }
    
/*ko.applyBindings({});*/
};

ko.applyBindings(new ViewModel());





