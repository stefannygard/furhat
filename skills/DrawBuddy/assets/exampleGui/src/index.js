import Furhat from 'furhat-gui'

var app = {};


Furhat(function (furhat) {
  furhat.subscribe('furhatos.app.drawbuddy.DataDelivery', function(data){ 
    
    if(data.action == 'init') {
      $('svg').removeClass('hidden');
      $('svg').addClass('fadeIn animated');
    }
    
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