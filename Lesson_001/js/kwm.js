"use strict";

/**********************************************************************
 *     Class-Bundle for Fuckn' Awzum JS-Shit.
 *
 *     You - 2022-03-14
 **********************************************************************/
//TODO: 1.) Translator



/* Example-Code for Testing:

let translator = new KWM_Translator("de", "en", "ru");
console.log(translator.translate("hello_world"));
console.log(translator.translate("it_is_me", "en"));
translator.currentLanguage = "ru";
console.log(translator.translate("hello_world"));
console.log(translator.translate("non_existing_key", "en"));

*/

/* Expected result:

Hallo Welt
It's me
Здравствуйте мир
--Missing translation: non_existing_key--

 */



//TODO: 2.) Templating



/* Example-Code for Testing:

const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
const container = document.getElementById("target_for_template"); //You can find this container in your index.html
const values = {my_name: "Ronald McDonald", my_age: 45};

renderTemplate(template, container, values);

*/




//TODO: 3.) Useful JS-Functions

function isEmpty(variable){

}

function getOS(){

}

function clientHasCamera(){

}

function getIndexOfObjectInArrayByPropertyvalue(array, property, value){

}

/* Example-Code for Testing:

const students = [ { name: "John", age: 20 }, { name: "Irina", age: 19 }, { name: "Ivan", age: 22 } ];

let result = getIndexOfObjectInArrayByPropertyvalue(students, "name", "Irina");

 */

//Expected result: 1