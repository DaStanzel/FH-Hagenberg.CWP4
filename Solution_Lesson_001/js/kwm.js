"use strict";

/**********************************************************************
 *     Class-Bundle for Fuckn' Awzum JS-Shit.
 *
 *     You - 2022-03-14
 **********************************************************************/
//1.) Translator
class KWM_Translator{
    constructor(...languages){
        for(const lng of languages)
            this[lng] = KWM_Resources[lng];
        this.currentLanguage = languages[0];
    }

    translate(key, language = this.currentLanguage){
        return isEmpty(this[language][key]) ? "--Missing translation: "+key+"--" : this[language][key];
    }
}

const KWM_Resources = {
    "de": {
        hello_world: "Hallo Welt",
        it_is_me: "Ich bin's",
        my_name_is : "Mein Name ist",
        age : "Alter"
    },
    "en": {
        hello_world: "Hello world",
        it_is_me: "It's me",
        my_name_is: "My name is",
        age: "age",
    },
    "ru": {
        hello_world: "Здравствуйте мир",
        it_is_me: "Это я",
        my_name_is: "Меня зовут",
        age: "Возраст",
    }
};


// Example-Code for Testing:
let translator = new KWM_Translator("de", "en", "ru");
console.log(translator.translate("hello_world"));
console.log(translator.translate("it_is_me", "en"));
translator.currentLanguage = "ru";
console.log(translator.translate("hello_world"));
console.log(translator.translate("non_existing_key", "en"));


/* Expected result:
Hallo Welt
It's me
Здравствуйте мир
--Missing translation: non_existing_key--
 */

//2.) Templating
function renderTemplate(template, container, values={}){
    let translations = /<%>/gi,
        data = /<&>/gi,
        translations_open = [],
        translations_close = [],
        data_open = [],
        data_close = [];

    let rendered = findEscapings(data, data_open, data_close, "fill", template);
    rendered = findEscapings(translations, translations_open, translations_close, "translate", rendered);
    container.innerHTML = rendered;

    function findEscapings(regex, open, close, mode, template){
        let even = true;
        let rendered = template;
        let result;
        while(result = regex.exec(template)){
            even ? open.push(result.index): close.push(result.index);
            even = !even;
        }
        for(let i = 0; i < open.length; i++){
            let toReplace = template.substring(open[i]+3, close[i]);
            let replacing = mode === "translate" ? translator.translate(toReplace) : values[toReplace];
            rendered = rendered.replace(template.substring(open[i], close[i]+3), replacing);
        }
        return rendered;
    }
}


/*
Example-Code for Testing: */

const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
const container = document.getElementById("target_for_template"); //You can find this container in your index.html
const values = {my_name: "Ronald McDonald", my_age: 45};

renderTemplate(template, container, values);


//3.) Useful JS-Functions

function isEmpty(variable){
    if(Array.isArray(variable))
        return (variable.length == 0);
    else if(typeof variable === "object")
        return (Object.entries(variable).length === 0 && variable.constructor === Object);
    else
        return (typeof variable === "undefined" || variable == null || variable === "");
}

function getOS(){
    let device = "Unknown Device";
    if(navigator.appVersion.indexOf("Win")!=-1) device = "Windows";
    if(navigator.appVersion.indexOf("Mac")!=-1) device = "MacOS"; //iPad Pro & iPhone 6 :)
    if(navigator.appVersion.indexOf("Android")!=-1) device = "Android";
    if(navigator.appVersion.indexOf("iOS")!=-1) device = "iOS";
    return device;
}

function clientHasCamera(){
    navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    navigator.getMedia({video: true}, function(stream) {
        stream.getTracks().forEach(function(track) {
            track.stop();
        });
        return true;
    }, function() {
        return false;
    });
}

function getIndexOfObjectInArrayByPropertyvalue(array, property, value){
    for(let i = 0; i < array.length; i++) {
        if(array[i][property] === value)
            return i;
    }
    return -1;
}

/*
Example-Code for Testing: */
const students = [ { name: "John", age: 20 }, { name: "Irina", age: 19 }, { name: "Ivan", age: 22 } ];

let result = getIndexOfObjectInArrayByPropertyvalue(students, "name", "Irina");
console.log(result);
console.log(getOS());
console.log(clientHasCamera());
//Expected result: 1 - Windows/MacOS/Linux - true