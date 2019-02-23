import Furhat from 'furhat-gui'

var app = {};


Furhat(function (furhat) {
  furhat.subscribe('furhatos.app.furgui.DataDelivery', function(data){ 
    console.log(data);
  });
  
  app.sendEvent = function() {
    furhat.send({
      event_name: "VariableSet",
      data: {
        variable:"Name",
        value:"Testare"
      }
    });
  }
});

document.getElementById("the-button").addEventListener('click', function(){app.sendEvent()});