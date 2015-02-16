
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
  init: function() {
    //default to first cat in list
    model.current = model.cats[0];

    //views initialize
    //list init
    catListView.init();
    //main view init
    catView.init();
  },

  getCurrent: function() {
    return model.current;
  },

  getCats: function(){
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.current = cat;
  },

  incrementCounter: function() {
    model.current.count++;
    console.log(model.current.count)
    catView.render();
  }

};

var catView = {
  //main view
  init: function() {
    //store DOM poointers
    this.catElm = document.getElementById('cat');
    this.catNameElm = document.getElementById('cat-name');
    this.catImageElm = document.getElementById('cat-img');
    this.countElm = document.getElementById('cat-count');

    //add click listener
    this.catImageElm.addEventListener('click', function(){
      controller.incrementCounter();
    });

    //update DOm elments with values
    this.render();
  },

  render: function() {
    //update DOM elemenets with current cat
    var currentCat = controller.getCurrent();
    this.catNameElm.textContent = currentCat.name;
    this.countElm.textContent = currentCat.count;
    this.catImageElm.src = currentCat.img;
  }
};

var catListView = {
  //list view 
  init : function() {
    this.catListElm = document.getElementById('cat-list');
    this.render();
  },

  render: function(){
    var cat, elm, i;
    var cats = controller.getCats();
    //empyt the list
    this.catListElm.innerHTML = '';

    //loop cats
    for (i=0; i<cats.length; i++) {
      //current cat
      cat = cats[i];

      //make new cat list itme and set its text
      elm = document.createElement('li');
      elm.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      // closure-in-a-loop 
      elm.addEventListener('click', (function(catCopy) {
        return   function() {
          controller.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat)); 

      this.catListElm.appendChild(elm);
    }
  }
};

//run
controller.init();