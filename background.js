console.log('taunus-detector background script started!');

chrome.runtime.onMessage.addListener(listen);

function parse (text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    return {};
  }
}

function listen (request, sender, sendResponse) {
  var data = parse(request);
  if (data.taunus) {
    chrome.pageAction.show(sender.tab.id);
    console.log('Taunus found at:', sender.tab.url);
  }
}
