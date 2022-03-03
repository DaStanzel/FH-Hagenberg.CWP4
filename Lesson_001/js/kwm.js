"use strict";

/**********************************************************************
 *     Class-Bundle for Fuckn' Awzum JS-Shit.
 *
 *     You - 2022-03-14
 **********************************************************************/
//1.) Translator



//2.) Templating



/*
Example-Code for Testing:

const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
const container = document.getElementById("target_for_template"); //You can find this container in your index.html
const values = ["Ronald McDonald", 45]; //Feel free to change this values to your personal credentials.

renderTemplate(template, container, values);
 */



//3.) Useful JS-Functions
function isEmpty(){

}

function getOS(){

}

function clientHasCamera(){

}

function getIndexOfObjectInArrayByPropertyvalue(){

}

const students = [ { name: "John", age: 20 }, { name: "Irina", age: 19 }, { name: "Ivan", age: 22 } ];

let result = getIndexOfObjectInArrayByPropertyvalue(students, "name", "Irina");
//Expected result: 1