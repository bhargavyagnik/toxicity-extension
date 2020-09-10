document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick,false)
    function onclick(){
        //do when button clicked
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'hi')
        })
}
    function setCount(res){
        const div = document.createElement('div')
        div.textContent = {}
    }
}, false)



//
//var counter = 0
//    const threshold = 0.9;
//    toxicity.load(threshold).then(model => {
//        for (index = 0; index < sp.length; index++) {
//            model.classify(sp).then(predictions => {
//            //console.log(predictions);
//            for(i=0; i<7; i++){
//                if(predictions[i].results[0].match){
//                    counter++;
//                    
//                    }  
//                }
//            });
//        }
//    })
//import * as toxicity from '@tensorflow-models/toxicity';