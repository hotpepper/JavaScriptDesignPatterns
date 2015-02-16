
var model = {
  current: null,
  cats: [
  {
    name: "Cat1",
    img: 'http://c2.staticflickr.com/2/1126/625069434_db86b67df8_b.jpg',
    count: 0
  },
  {
    name: "Cat2",
    img: 'http://c3.staticflickr.com/3/2298/2290467335_89067c7b51_n.jpg',
    count: 0
  },
  {
    name: "Cat3",
    img: 'http://c4.staticflickr.com/4/3765/9126414150_0d9e1b840b_c.jpg',
    count: 0
  },
  {
    name: "Cat4",
    img: 'http://c3.staticflickr.com/3/2082/2140091820_85f5cbe62f_n.jpg',
    count: 0
  },
  {
    name: "Cat5",
    img: 'http://c4.staticflickr.com/8/7172/6759245781_7921be45e8_n.jpg',
    count: 0
  }
  ]
};

var controller = {
	start : function () {
		//gotta start somewheres 
		model.current = model.cats[0];
		//start list 
		listView.start();
		//start main
		mainView.start();
	},
	getCat: function() {
		return model.current;
	},
	getAllCats: function() {
		return model.cats;
	},
	countMe: function (){
		model.current.count++;
		//update view
		mainView.show()
		
	},
	setCurrent: function(cat) {
		model.current = cat;
		console.log("current cat is: "+ model.current.name);
		mainView.show();
		mainView.countImg();
	}

};

var listView = {
	start: function(){
		this.makeList()
		},
	listenToMe: function(copyLI, copyCat){//deals with closure issue
		return function(){
			//adds listener to list obj
			$(copyLI).click(console.log("clicked: "+copyLI));
			//tell model which is current cat
			controller.setCurrent(copyCat);

		}
	},
	makeList: function(){ //builds up the list of cats in view from model
		var catList = controller.getAllCats();
		for (var i = 0; i< catList.length; i++) {
			//add cat to list
			var curCat = catList[i]; 
			$("#list").append("<li id='li"+i.toString()+"'>"+catList[i].name+"</li>")
			
			//add listener to each cat's list element
			var cruID = "#li"+i.toString()
			$(cruID).click(this.listenToMe(cruID, curCat))		
		};
	},

	
};

var mainView= {
	start: function(){
		console.log("Starting main")
		//this.show();
	},
	show: function(){
		var curCat = controller.getCat();
		$("#cat_img").attr("src",curCat.img);
		$("#name").text(curCat.name);
		$("#count").text(curCat.count);
	},
	countImg: function(){
		$("#cat_img").click(controller.countMe());
	}
};

//run
controller.start();