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