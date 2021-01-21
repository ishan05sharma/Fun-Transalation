// var btnTranslate = document.querySelector("#btnTranslate");
var txtareainput = document.querySelector("#txtarea");
var outputarea = document.querySelector(".output")
var btn1 = document.querySelector("#btn1");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var BananaServerURL = "https://api.funtranslations.com/translate/minion.json"
var DothrakiServerURL = "https://api.funtranslations.com/translate/dothraki.json"
var norfolkServerURL = "https://api.funtranslations.com/translate/norfolk.json"

function constructURL(serverURL, text){
    return serverURL+"?text="+text
}

function btnEventHandler(){
    console.log('lalala')
    console.log("input: ", txtareainput.value)
    output.innerHTML = "bvjksbvkjbk"
}


function errorhandler(error){
    alert("There's an error:", error)
}

function btn1listener(){
    document.body.style.background = "url(https://i1.wp.com/digiday.com/wp-content/uploads/2015/07/minions-banner.png)";
    fetch(constructURL(BananaServerURL, txtareainput.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputarea.innerText = translatedText;
    })
    .catch(errorhandler)
}


function btn2listener(){
    document.body.style.background = "url(https://cdn.images.express.co.uk/img/dynamic/39/590x/Game-of-Thrones-Where-did-the-Dothraki-go-1151748.jpg)";
    fetch(constructURL(DothrakiServerURL, txtareainput.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputarea.innerText = translatedText;
    })
    .catch(errorhandler)
}


function btn3listener(){
    document.body.style.background = "url(https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2019/12/Vikings_Sn4_Ep4_Ragnar2.jpg)";
    fetch(constructURL(norfolkServerURL, txtareainput.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputarea.innerHTML = translatedText;
    })
    .catch(errorhandler)
}

function btn4listener(){
    document.body.style.background = "white";
    txtareainput.innerHTML = ""
    outputarea.innerText = ""
}


// btnTranslate.addEventListener("click",  btnEventHandler)
btn1.addEventListener("click", btn1listener)
btn2.addEventListener("click", btn2listener)
btn3.addEventListener("click", btn3listener)
btn4.addEventListener("click", btn4listener)

// DOM - document object model
// hence we use document