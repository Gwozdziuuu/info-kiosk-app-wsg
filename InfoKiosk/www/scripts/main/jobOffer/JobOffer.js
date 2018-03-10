importScript("scripts/main/jobOffer/$_package.js");

ik.main.jobOffer.JobOffer = treelad.Class.create({

  init: function (cfg) {
    treelad.Class.extend(this, treelad.Class.extend({
    }, cfg));
    this.render();
  },

  render: function() {
    var t = this;

    $.ajax({
      url: $URL + 'api/getOffersByCategory?category=' + t.category,
      type: 'get'
    })
    .then(function(data) {
      console.log(data);
      t.renderOfferSlider(data);
      t.initializeOfferSlider();
    });

  },

  renderOfferSlider: function(data) {
    var t = this;
    var offerSlider = $_element({
      $_tag: "div",
      id: "offerSlider",
      style: "position: absolute; top: 85px; bottom: 0px; left: 0px; right: 0px;",
      $_append: [{
        $_tag: "div",
        data_u: "slides",
        style: "position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;",
        $_append: data.map(function(offer) {
          return {
            $_tag: "div",
            class: "card text-center",
            style: "background-color: rgba(245, 245, 245, 0.9);",
            $_append: [{
              $_tag: "div",
              class: "card-block",
              style: "overflow: scroll;",
              $_append: [{
                $_tag: "h4",
                class: "card-title",
                $_append: offer.title
              }, {
                $_tag: "p",
                class: "card-text",
                $_append: offer.description
              }, {
                $_tag: "br"
              }, {
                $_tag: "p",
                class: "card-text",
                $_append: "Kontakt: " + offer.email
              }]
            }, {
              $_tag: "div",
              class: "card-footer text-muted",
              $_append: "Wynagrodzenie netto: " + offer.salary
            }]
          };
        })
      }]
    });
    t.inside.update(offerSlider);
  },

  initializeOfferSlider: function() {
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

    t.offerSlider = new $JssorSlider$("offerSlider", options);
  },



});
