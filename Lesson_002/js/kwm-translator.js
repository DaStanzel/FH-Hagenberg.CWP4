"use strict";

/**********************************************************************
 *     Translation-Engine for KWM-JS
 *     Just add your key:"value" Pairs down by.
 *
 *     KWM - 2022-03-28
 **********************************************************************/

export default class KWM_Translator{
    constructor(...languages){
        for(const lng of languages)
            this[lng] = KWM_Resources[lng];
        this.currentLanguage = languages[0];
    }

    translate(key, language = this.currentLanguage){
        return kwm.utils.isEmpty(this[language][key]) ? "--Missing translation: "+key+"--" : this[language][key];
    }
}










/****************************
 *
 *         RESOURCES
 *
 ***************************/
const KWM_Resources = {
    "de": {
        welcome_message: "Willkommen bei kwmJS!",
        click_me: "Klick mich!",
        whoops: "Upsi, da ist wohl was schief gegangen!",
    },
    "en": {
        welcome_message: "Welcome to kwmJS!",
        click_me: "Click me!",
        whoops: "Whoopsy Daisy! Something went wrong!",
    }
};