importScript("scripts/main/$_package.js");

importScript("scripts/main/jobOffer/$_package.js");
importScript("scripts/main/jobOffer/JobOffer.js");

importCss("css/main_view.css");

ik.main.MainView = treelad.Class.create({

  init: function (cfg) {
    treelad.Class.extend(this, treelad.Class.extend({
      choosenCategory: ""
    }, cfg));

  },

  render: function() {
    var t = this;

    var navigator = $_element({
      $_tag: "div",
      class: "container",
      style: "background-color: #FFF176",
      $_append: [{
        $_tag: "br"
      }, {
        $_tag: "ul",
        class: "nav nav-pills nav-justified",
        $_append: [{
          $_tag: "li",
          class: "nav-item",
          $_append: [{
            $_tag: "a",
            class: "nav-link",
            $_append: "IT",
            $_on: {
              "click": function(e) {
                e.preventDefault();
                $(this).tab('show');
                t.choosenCategory = "it";
                t.openJobOfferView();
              }
            }
          }]
        }, {
          $_tag: "li",
          class: "nav-item",
          $_append: [{
            $_tag: "a",
            class: "nav-link",
            $_append: "Ochrona",
            $_on: {
              "click": function(e) {
                e.preventDefault();
                $(this).tab('show');
                t.choosenCategory = "ochrona";
                t.openJobOfferView();
              }
            }
          }]
        }, {
          $_tag: "li",
          class: "nav-item",
          $_append: [{
            $_tag: "a",
            class: "nav-link",
            $_append: "Produkcja",
            $_on: {
              "click": function(e) {
                e.preventDefault();
                $(this).tab('show');
                t.choosenCategory = "produkcja";
                t.openJobOfferView();
              }
            }
          }]
        }]
      }, {
        $_tag: "br"
      }, {
        $_tag: "div",
        id: "offerContainer",
      }]
    });
    t.inside.insert(navigator);

  },

  openJobOfferView: function() {
    var t = this;
    var jobOfferView = new ik.main.jobOffer.JobOffer({
      inside: t.inside.find('offerContainer'),
      category: t.choosenCategory
    });
  }

});

$MAIN = new ik.main.MainView({
  inside: $_element(document.body),
});

$MAIN.render();

$URL = 'http://info-kiosk-wsg-info-kiosk-wsg.1d35.starter-us-east-1.openshiftapps.com/WebContent/'
