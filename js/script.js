





//cat constructor
var Cat = function (name, img, count) {
  this.name = name;
  this.img = img;
  this.count = count;
  this.label = 'Clicks: 0';
  //console.log('Cat instantiated');
};

//build list of cats to choose from
var addToList = function(cat_list){
	for (var i =0; i<cat_list.length; i++) {
		var cat_li = "<li id=li"+i+">"+cat_list[i].name+"</li>";
		$("#list").append(cat_li);
		cat_list[i].id = "cat_num"+i
		};
};

//add selected cat to DOM
var view_selected= function (cat){
	var selected_cat = '<h3 id="cat2_name">'+cat.name+'</h3>'+
		'<img class = "cat_image" id="'+cat.id+'" '+
		'src="'+cat.img+'">'+
		'<h3 class="cat2_label" id=L_'+cat.id+'> Clicks: '+cat.count+'</h3></div>'

	$(".col-3").html(selected_cat);	
};


//count clicks
var clickCounter = function(cat) {
	$("#"+cat.id).click(function(){
		cat.count++;
		$("#L_"+cat.id).text("Clicks: "+cat.count)
		console.log(cat.count)
	})
};



//build the cat objects
var cat1 = new Cat('Seth', 'http://c2.staticflickr.com/2/1126/625069434_db86b67df8_b.jpg', 0);
var cat2 = new Cat('Kristen', "http://c3.staticflickr.com/3/2298/2290467335_89067c7b51_n.jpg", 0);
var cat3 = new Cat('ass-face', "http://c4.staticflickr.com/4/3765/9126414150_0d9e1b840b_c.jpg",0);
var cat4 = new Cat('butt-face', "http://c3.staticflickr.com/3/2082/2140091820_85f5cbe62f_n.jpg",0 );
var cat5 = new Cat('ass-hat', "http://c4.staticflickr.com/8/7172/6759245781_7921be45e8_n.jpg", 0);
//generate list of cats for looping
var cat_list = [cat1, cat2, cat3, cat4, cat5]
//add cats to DOM list
addToList(cat_list);
//add clicked cat to screen
$("#li0").click(function(){
	view_selected(cat1);
	clickCounter(cat1);

});
$("#li1").click(function(){
	view_selected(cat2);
	clickCounter(cat2);
});
$("#li2").click(function(){
	view_selected(cat3);
	clickCounter(cat3);
});
$("#li3").click(function(){
	view_selected(cat4);
	clickCounter(cat4);
});
$("#li4").click(function(){
	view_selected(cat5);
	clickCounter(cat5);
});
