chrome.runtime.onMessage.addListener(function (request) {
    //alert(request)
    var dc = document.documentElement.innerHTML
    var sp = dc.split(".")
    sendResponse({sent: sp})
})