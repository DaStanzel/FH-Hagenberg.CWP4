"use strict";

/**********************************************************************
 *     Translation-Engine for KWM-JS
 *     Just add your key:"value" Pairs down by.
 *
 *     KWM - 2022-03-26
 **********************************************************************/

export default class KWM_Translator{
    constructor(...languages){
        for(const lng of languages)
            this[lng] = KWM_Resources[lng];
        this.currentLanguage = kwm.utils.isEmpty(localStorage.lang) ? languages[0] : localStorage.lang;
    }

    translate(key, language = this.currentLanguage){
        return window.kwm.utils.isEmpty(this[language][key]) ? "--Missing translation: "+key+"--" : this[language][key];
    }

    createLanguageMenu(container){
        let ul = document.createElement("ul");
        for(const [key] of Object.entries(this)){
            if(key != "currentLanguage"){
                let li = document.createElement("li");
                li.addEventListener("click", KWM_Translator.changeLanguage);
                li.innerText = key.toUpperCase();
                ul.append(li);
            }
        }
        container.prepend(ul);
    }

    static changeLanguage(){
        kwm.translator.currentLanguage = this.innerText.toLowerCase();
        kwm.router.changeView();
        kwm.renderHeader();
        kwm.renderFooter();
        localStorage.lang = this.innerText.toLowerCase();
    }
}




/****************************
 *
 *         RESOURCES
 *
 ***************************/
const KWM_Resources = {
    "de": {
        //region General
        welcome_message: "Willkommen bei kwmJS!",
        click_me: "Klick mich!",
        our_shop: "Unser Haustierchen-Shop",
        whoops: "Upsi, da ist wohl was schief gegangen!",
        description: "Beschreibung",
        price: "Preis",
        kwm: "Kommunikation, Wissen, Medien",
        //endregion

        //region Menu
        contact: "Kontakt",
        shop: "Shop",
        home: "Startseite"
        //endregion
    },
    "en": {

        //region General
        welcome_message: "Welcome to kwmJS!",
        click_me: "Click me!",
        our_shop: "Our Pet-Shop",
        whoops: "Whoopsy Daisy! Something went wrong!",
        description: "Description",
        price : "Price",
        kwm: "Communication, Knowledge, Media",
        //endregion

        //region Menu
        contact: "Contact",
        shop: "Shop",
        home: "Home"
        //endregion
    }
};