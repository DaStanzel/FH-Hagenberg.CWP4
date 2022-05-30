"use strict";
import KWM_Utils from './kwm-utils.js?v=0.2';
import KWM_Translator from './kwm-translator.js?v=0.2';
import KWM_Templater from './kwm-templater.js?v=0.2';
import KWM_Router from './kwm-router.js?v=0.2';
import KWM_Model from './kwm-model.js?v=0.2';
/**********************************************************************
 *     Class-Bundle for KWM-Applications.
 *     App-Shell needs an ID "#kwmJS".
 *
 *     @param:
 *     webRoot - Give me the root-URL of your App
 *     routes - Give me an Object with "slug" : "template" Routes
 *     config - Want to store some Config in your App? Here you go!
 *     ...languages - Give me all languages you want your App to support.
 *
 *     KWM - 2022-03-26
 **********************************************************************/

class kwmJS{
    constructor(){
        window.kwm = this;
        this.options = {
            appContainer: document.getElementById('kwmJS'),
            debugMode: true,
            webRoot: "http://localhost:63342/FH-Hagenberg.CWP4.master/Solution_Lesson_004",
        };
        this.utils = KWM_Utils;
        this.model = new KWM_Model();
        this.translator = new KWM_Translator("de", "en");
        this.templater = new KWM_Templater(this.options.webRoot+"/templates/");
        this.router = new KWM_Router();

        this.renderHeader();
        this.renderFooter();
    }

    t(key){
        return this.translator.translate(key);
    }

    async renderHeader(){
        await this.templater.renderTemplate("header", document.querySelector("header"));
        this.translator.createLanguageMenu(document.getElementById("languagemenu"));
    }

    async renderFooter(){
        await this.templater.renderTemplate("footer", document.querySelector("footer"), {year: new Date().getFullYear() });
    }
}
new kwmJS();