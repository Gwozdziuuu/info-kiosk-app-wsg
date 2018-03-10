importScript("scripts/main/$_package.js");

importScript("scripts/main/jobOffer/$_package.js");
importScript("scripts/main/jobOffer/JobOffer.js");

importCss("css/main_view.css");

ik.main.MainView = treelad.Class.create({

  init: function (cfg) {
    treelad.Class.extend(this, treelad.Class.extend({
    }, cfg));

  },

  render: function() {
    var t = this;

    var jobOffers = [{
      type: "System Monitoringu Wizyjnego",
      id: "99",
      elements: [{
        type: "Rejestrator wideo",
        id: "videoRegister",
        products: [{
          id: "pvr1",
          name: "Rejestartor Cyfrowy PVR-1",
          image: "images/PVR_1.png",
          patron: "Dariusz Wittkowicz",
          description: "Rejestrator cyfrowy PVR to jednostka centralna profesjonalnego systemu monitoringu wizyjnego. Jego wykonanie i rozbudowana funkcjonalność została podporządkowana specyficznym warunkom pracy oraz oczekiwaniom użytkowników pojazdów komunikacji pasażerskiej. Główne cechy tego urządzenia to: obsługa urządzenia i podgląd nagrań na ekranie dotykowym oraz zapis obrazu jednocześnie z 14 kamer IP na dyskach twardych instalowanych wewnątrz urządzenia w obudowach antywstrząsowych. Urządzenie pozwala na nagrywanie 2 strumieni audio. Obraz jest rejestrowany w skompresowanych plikach w formatach MPEG-4, H.264, w rozdzielczości 1280 x 1024 do 30 kl/s dla pojedyńczej kamery. Rejestracja może być prowadzona w trybie ciągłym, alarmowym i według harmonogramu. Bardzo przydatnym rozwiązaniem jest odtwarzanie wszystkich kanałów jednocześnie, gdy zachodzi potrzeba sprawdzenia nagrań z kilku kamer."
        }, {
          id: "pvr2",
          name: "Rejestartor Cyfrowy PVR-2",
          image: "images/PVR_2.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }, {
        type: "Kamera zewnętrzna",
        id: "cam1",
        products: [{
          id: "outCamera",
          name: "Kamera zewnętrzna",
          image: "images/outside_camera.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }, {
        type: "Kamera wewnętrzna",
        id: "cam2",
        products: [{
          id: "insideCamera",
          name: "Kamera wewnętrzna",
          image: "images/inside_camera.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }, {
        type: "Monitor LCD",
        id: "lcd",
        products: [{
          id: "lcdMonitor",
          name: "Monitor LCD",
          image: "images/monitor.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }]
    }, {
      type: "XXX",
      id: "x99",
      elements: [{
        type: "Rejestrator wideo",
        id: "z1",
        products: [{
          id: "1",
          name: "Rejestartor Cyfrowy PVR-1",
          image: "images/inside_camera.png",
          patron: "Dariusz Wittkowicz",
          description: "Rejestrator cyfrowy PVR to jednostka centralna profesjonalnego systemu monitoringu wizyjnego. Jego wykonanie i rozbudowana funkcjonalność została podporządkowana specyficznym warunkom pracy oraz oczekiwaniom użytkowników pojazdów komunikacji pasażerskiej. Główne cechy tego urządzenia to: obsługa urządzenia i podgląd nagrań na ekranie dotykowym oraz zapis obrazu jednocześnie z 14 kamer IP na dyskach twardych instalowanych wewnątrz urządzenia w obudowach antywstrząsowych. Urządzenie pozwala na nagrywanie 2 strumieni audio. Obraz jest rejestrowany w skompresowanych plikach w formatach MPEG-4, H.264, w rozdzielczości 1280 x 1024 do 30 kl/s dla pojedyńczej kamery. Rejestracja może być prowadzona w trybie ciągłym, alarmowym i według harmonogramu. Bardzo przydatnym rozwiązaniem jest odtwarzanie wszystkich kanałów jednocześnie, gdy zachodzi potrzeba sprawdzenia nagrań z kilku kamer."
        }, {
          id: "2",
          name: "Rejestartor Cyfrowy PVR-2",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }, {
        type: "Kamera zewnętrzna",
        id: "z2",
        products: [{
          id: "3",
          name: "Kamera zewnętrzna",
          image: "images/inside_camera.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }, {
        type: "Kamera wewnętrzna",
        id: "z3",
        products: [{
          id: "4",
          name: "Kamera wewnętrzna",
          image: "images/inside_camera.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }, {
        type: "Monitor LCD",
        id: "z4",
        products: [{
          id: "5",
          name: "Monitor LCD",
          image: "images/inside_camera.png",
          patron: "Dariusz Wittkowicz",
          description: "asd"
        }]
      }]
    }];

    var navigator = $_element({
      $_tag: "div",
      class: "container",
      $_append: [{
        $_tag: "ul",
        class: "nav nav-pills nav-justified",
        $_append: [{
          $_tag: "li",
          class: "nav-item",
          $_append: [{
            $_tag: "a",
            class: "nav-link",
            $_append: "asd",
            $_on: {
              "click": function(e) {
                e.preventDefault()
                $(this).tab('show')
              }
            }
          }]
        }, {
          $_tag: "li",
          class: "nav-item",
          $_append: [{
            $_tag: "a",
            class: "nav-link",
            $_append: "asd",
            $_on: {
              "click": function(e) {
                e.preventDefault()
                $(this).tab('show')
              }
            }
          }]
        }]
      }]
    });

    t.inside.insert(navigator);

    /*var jobOfferView = new ik.main.jobOffer.JobOffer({
      inside: t.inside,
      jobOffers: jobOffers
    });*/

  },

});

$MAIN = new ik.main.MainView({
  inside: $_element(document.body),
});

$MAIN.render();
