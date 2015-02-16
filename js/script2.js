
var model = {
	admin: false, 
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
		//console.log("current cat is: "+ model.current.name);
		mainView.show();
		mainView.countImg();
	},
	getMode: function(){
		return model.admin;
	},
	setAdmin: function(){
		if(model.admin ==false) {
			model.admin = true;
			mainView.showAdmin();
		} else {
			model.admin=false;
			mainView.hideAdmin();
		};
		
	},
	updateAdmin: function(){
		model.current.name = $("input[name=name]").val();
		model.current.img = $("input[name=img]").val()
		model.current.count = $("input[name=clicks]").val()
		mainView.show();
	}
	

};

var listView = {
	start: function(){
		this.makeList()
		},
	listenToMe: function(copyLI, copyCat){//deals with closure issue
		return function(){
			//adds listener to list obj
			//$(copyLI).click(console.log("clicked: "+copyLI));
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
	}

	
};

var mainView= {
	start: function(){
		console.log("Starting main")
		//this.show();
		$("#admin-button").click(
			function(){
				controller.setAdmin();
			}
			);
		
	},
	show: function(){
		var curCat = controller.getCat();
		$("#cat_img").attr("src",curCat.img);
		$("#name").text(curCat.name);
		$("#count").text(curCat.count);
		
	},
	countImg: function(){
		var catImg = $("#cat_img");
		catImg.click( function() { // ---------------- need to pass a anon function to make this work properly
			controller.countMe()
		});
		console.log(catImg)
	},
	showAdmin: function(){
		var curCat = controller.getCat();
		$("#admin-col2").append("<form></form>");
		$("form").append("Name: <input type='text' name='name' value='"+curCat.name+"'><br> ")
		$("form").append("img src: <input type='text' name='img' value='"+curCat.img+"'> <br>")
		$("form").append("clicks#: <input type='text' name='clicks' value='"+curCat.count+"'><br> ")
		$("#admin-col2").append("<button id = 'cancel-button'>CANCEL</button>");
		$("#admin-col2").append("<button id = 'save-button'>SAVE</button>");
		$('#cancel-button').click(function(){
			mainView.hideAdmin();
		})
		$("#admin-col2").click(function() {
			controller.updateAdmin();
		})

	},
	hideAdmin: function(){
		$('#admin-col2').html("<form></form>")
	}

};

//run
controller.start();