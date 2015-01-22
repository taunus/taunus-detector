(function () {
  'use strict';

  var scriptElement = document.getElementById('__taunusDetectorScript');
  var eventProxyElement = document.getElementById('__taunusDetectorElement');
  var customEvent = document.createEvent('Event');

  customEvent.initEvent('taunusDetectionEvent', true, true);
  checkForTaunus();

  function sendMessage (content) {
    eventProxyElement.innerText = JSON.stringify(content);
    eventProxyElement.dispatchEvent(customEvent);
  }

  function checkForTaunus () {
    var notFound = !window.taunus;
    if (notFound) {
      setTimeout(checkForTaunus, 1000); return;
    }
    sendMessage({ taunus: true });
    eventProxyElement.remove();
    scriptElement.remove();
  }

}());
