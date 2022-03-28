"use strict";
import KWM_Utils from './kwm-utils.js?v=0.2';
import KWM_Translator from './kwm-translator.js?v=0.2';
import KWM_Templater from './kwm-templater.js?v=0.2';
/**********************************************************************
 *     Class-Bundle for KWM-Applications.
 *     App-Shell needs an ID "#kwmJS".
 *
 *     @param:
 *     appContainer - This is where the App is rendered into
 *     debugMode - Enables console.logs
 *     webRoot - Give me the root-URL of your App
 *
 *     KWM - 2022-03-28
 **********************************************************************/

class kwmJS{
    constructor(){
        window.kwm = this;
        this.options = {
            appContainer: document.getElementById('kwmJS'),
            debugMode: true,
            webRoot: "http://127.0.0.1/git/FH-Hagenberg.CWP4/Lesson_002",
        };
        this.utils = KWM_Utils;
        this.translator = new KWM_Translator("de", "en", "ru");
        this.templater = new KWM_Templater(this.options.webRoot+"/templates/");
    }

    t(key){
        return this.translator.translate(key);
    }
}
new kwmJS();