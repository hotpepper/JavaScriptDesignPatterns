
//set default value
var cat1_clicks = 0;
var cat1_name = "Seth"
var cat2_clicks = 0;
var cat2_name = "Kristen"
//name the cats
$("#cat1_name").text(cat1_name)
$("#cat2_name").text(cat2_name)

//count clicks
var clickCounter = function(cat, cat_label, cat_count) {
	$(cat).click(function(){
		cat_count++;
		$(cat_label).text("Clicks: "+cat_count)
	})
};

clickCounter("#cat1", ".cat1_label", cat1_clicks);
clickCounter("#cat2", ".cat2_label", cat2_clicks);


//cat constructor
var Cat = function (name, img, count) {
  this.name = name;
  this.img = img;
  this.count = count;
  console.log('Cat instantiated');
};

var cat1 = new Cat('Seth');
var cat2 = new Cat('Kristen');
