chrome.runtime.onMessage.addListener(function (request) {
    //alert(request)
    var dc = document.documentElement.innerHTML
    var sp = dc.split(".")
    var tjs = document.createElement('script');
    tjs.setAttribute('src',"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest")
    document.head.appendChild(tjs);
    var tox = document.createElement('script');
    tox.setAttribute('src',"https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity")
    var counter = 0
    document.head.appendChild(tox);
    const threshold = 0.9;
    toxicity.load(threshold).then(model => {
        for (index = 0; index < sp.length; index++) {
            model.classify(sp).then(predictions => {
            //console.log(predictions);
            for(i=0; i<7; i++){
                if(predictions[i].results[0].match){
                    counter++;
                    
                    }  
                }
            });
        }
    })
    alert(counter)
})