importScript("scripts/main/jobOffer/$_package.js");

ik.main.jobOffer.JobOffer = treelad.Class.create({

  init: function (cfg) {
    treelad.Class.extend(this, treelad.Class.extend({
    }, cfg));
    this.render();
  },

  render: function() {
    var t = this;

    console.log(t.jobOffers);

    t.renderCategorySlider();
    t.initializeContainerSlider();
  },

  renderCategorySlider: function() {
    var t = this;
    var categorySlider = $_element({
      $_tag: "div",
      id: "categoryContainer",
      class: "fill",
      style: "position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;",
      $_append: [{
        $_tag: "div",
        data_u: "slides",
        style: "position: absolute; top: 0px; bottom: 5vh; left: 0px; right: 0px;",
        $_append: t.categories.map(function(category) {
          var categoryLabel = t.prepareCategoryLabel(category.type);
          var elementSlider = t.prepareElementSlider(category);
          return {
            $_tag: "div",
            $_append: [categoryLabel, elementSlider]
          };
        })
      }, {
        $_tag: "div",
        id: "productSlide",
        style: "position: fixed; top: 0px; left: 0px; height: 100%; width: 100%; background: yellow; z-index:100; display: none;",
        $_append: [{
          $_tag: "div",
          style: "height: 100%; width: 100%;",
          id: "productPage"
        }]
      }]
    });
    t.inside.update(categorySlider);
  },

  renderProductPage: function(product) {
    var t = this;

    console.log(product);

    var productPage = $_element({
      $_tag: "div",
      style: "height: 100%",
      $_append: [{
        $_tag: "div",
        style: "width:100%; height:60%; float:left; background: white;",
        $_append: [{
          $_tag: "div",
          style: "width: 100%; height: 90%; text-align: center;",
          $_append: [{
            $_tag: "img",
            style: "position: relative; max-width: -moz-available; max-height: 100%;",
            src: product.image
          }]
        }, {
          $_tag: "div",
          style: "position: relative; top: -5%; width: 100%; height: 10%; margin-left: 3vh;",
          $_append: [{
            $_tag: "p",
            style: "font-size: 23px;",
            $_append: product.name
          }]
        }, {
          $_tag: "div",
          style: "position: fixed; top: 20px; left: 3vh; width: 30px; height: 30px",
          $_append: [{
            $_tag: "img",
            style: "max-height: 30px; width: auto;",
            src: "images/left_arrow.png",
            $_on: {
              "click": function(e) {
                $("#productSlide").toggle("slide");
              }
            }
          }]
        }]
      }, {
        $_tag: "div",
        style: "width:100%; height:40%; float:left;",
        $_append: [{
          $_tag: "div",
          style: "width: 100%; height: 100%",
          class: "fill_product",
          $_append: [{
            $_tag: "div",
            style: "position: relative; width: 100%; height: 10%; margin-left: 4vh; margin-bottom: 4vh; top: 10px;",
            $_append: [{
              $_tag: "p",
              style: "font-size: 14px; color: white;",
              $_append: "Opiekun produktu: " + product.patron
            }]
          }, {
            $_tag: "div",
            style: "position: relative; width: 100%; height: 80%; overflow: scroll;",
            id: "descriptionPanel",
            $_append: [{
              $_tag: "p",
              style: "margin: 4vh; color: white;",
              $_append: product.description
            }]
          }]
        }]
      }]
      /*$_append: [{
      $_tag: "div",
      style: "width:100%; height:50%;",
      $_append: [{
      $_tag: "div",
      $_append: [{
      $_tag: "img",
      style: "height: 30px; width: auto;",
      src: "images/left_arrow.png",
      $_on: {
      "click": function(e) {
      $("#productSlide").toggle("slide");
    }
  }
}]
}, {
$_tag: "div",
style: "width:100%; height:50%;",
$_append: [{
$_tag: "div",
$_append: "asd"
}]
}]
}]*/
});

t.inside.find("productPage").update(productPage);
t.initializeDescriptionPanel();
$("#productSlide").toggle("slide");
},

initializeDescriptionPanel: function() {
  var t = this;
  $(function(){
    var curDown = false,
    curYPos = 0,
    curXPos = 0;
    $("#descriptionPanel").mousemove(function(m){
      if(curDown === true){
        $("#descriptionPanel").scrollTop($("#descriptionPanel").scrollTop() + (curYPos - m.pageY));
        $("#descriptionPanel").scrollLeft($("#descriptionPanel").scrollLeft() + (curXPos - m.pageX));
      }
    });

    $("#descriptionPanel").mousedown(function(m){
      curDown = true;
      curYPos = m.pageY;
      curXPos = m.pageX;
    });

    $("#descriptionPanel").mouseup(function(){
      curDown = false;
    });
  })
},

initializeContainerSlider: function() {
  var t = this;
  var options = {
    $Idle: 2000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
    $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

    $ArrowKeyNavigation: 1,   			                //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
    $SlideEasing: $Jease$.$OutQuint,                    //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
    $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
    $MinDragOffsetToSlide: 50,                          //[Optional] Minimum drag offset to trigger slide, default value is 20
    //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
    //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
    $SlideSpacing: 0, 					                        //[Optional] Space between each slide in pixels, default value is 0
    $Align: 0,                                          //[Optional] The offset position to park slide (if this option is not 0, slideshow will be disabled), if this value is not set, it will auto center current slide at center of the carousel.
    $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $Steps: 1,
    $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

    $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
      $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
      $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
    }
  };

  t.categorySlider = new $JssorSlider$("categoryContainer", options);
},

initializeElementSlider: function(id) {
  var t = this;
  var options = {
    $SlideHeight: window.innerHeight/4,
    $Idle: 2000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
    $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

    $ArrowKeyNavigation: 1,   			                //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
    $SlideEasing: $Jease$.$OutQuint,                    //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
    $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
    $MinDragOffsetToSlide: 50,                          //[Optional] Minimum drag offset to trigger slide, default value is 20
    //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
    //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
    $SlideSpacing: 0, 					                        //[Optional] Space between each slide in pixels, default value is 0
    $Align: 0,                                          //[Optional] The offset position to park slide (if this option is not 0, slideshow will be disabled), if this value is not set, it will auto center current slide at center of the carousel.
    $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 2,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 2,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
  };

  for (var i in t.categories) {
    var x = new $JssorSlider$("elementContainer_" + t.categories[i].id, options);
  }

},

initializeProductSlider: function(id) {
  var t = this;
  var options = {
    $SlideHeight: window.innerHeight/4,
    $Idle: 2000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
    $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

    $ArrowKeyNavigation: 1,   			                //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
    $SlideEasing: $Jease$.$OutQuint,                    //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
    $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide, default value is 20
    //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
    //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
    $SlideSpacing: 0, 					                        //[Optional] Space between each slide in pixels, default value is 0
    $Align: 0,                                          //[Optional] The offset position to park slide (if this option is not 0, slideshow will be disabled), if this value is not set, it will auto center current slide at center of the carousel.
    $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
  };

  for (var i in t.categories) {
    for (var j in t.categories[i].elements) {
      var x = new $JssorSlider$("productContainer_" + t.categories[i].elements[j].id, options);
    }
  }

}

});
