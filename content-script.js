var html = document.getElementsByTagName('html')[0];

var eventProxyElement = document.createElement('div');
eventProxyElement.id = '__taunusDetectorElement';
eventProxyElement.style.display = 'none';
html.appendChild(eventProxyElement);

// inject into the application context from the content script context

var script = window.document.createElement('script');
script.src = chrome.extension.getURL('inject.js');
script.id = '__taunusDetectorScript';

eventProxyElement.addEventListener('taunusDetectionEvent', listen);
html.appendChild(script);

function listen () {
  chrome.runtime.sendMessage(eventProxyElement.innerText);
}
