#CWP4 - Lesson_001
    Prerequisites:
      - JS-Basics
      - JS-Classes (ES6)
## In order to obtain the cake 🍰, solve the following tasks:

<details>
    <summary>1. Translation Engine (45)</summary>

###Develop the functionality of a Translation Engine, in order to translate Text in at least two languages.

Open /js/kwm.js and create a Translator-Class (KWM_Translator). 
   1. In the constructor, expect multiple languages as the only parameter [(Spread Syntax)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
   2. For each language passed in the arguments, add a [member variable](https://en.wikipedia.org/wiki/Member_variable#:~:text=In%20object%2Doriented%20programming%2C%20a,its%20methods%20(member%20functions)).
   3. Declare one additional member variable that stores the current language.
      1. The first given language should serve as the default current language.
   4. A new Translator-Object should be invocable by the following command:
      ```
      let translator = new KWM_Translator(["de", "en", "ru"]);
      ```
   5. Find a way to store your Resource Strings in a way the translator can access and connect them to its members.
   
      <details>
        <summary>What are Resource Strings?</summary>
         
      Resources can be stored as key-value pairs. For example:
      ```
      const KWM_Resources = {
        "de": {
            hello_world: "Hallo Welt",
            it_is_me: "Ich bin's",
        },
        "en": {
            hello_world: "Hello world",
            it_is_me: "It's me",
        },
        "ru": {
            hello_world: "Здравствуйте мир"
            it_is_me: "Это я",
        }
      };
      ```

      Resource strings are specific string constants.
      The main purpose of resource strings is the localization (language translation) of the software.
      Imagine you want to build a software both in French and English:
      Instead of translating all texts in the markup and the JS-Code, you just need to modify a list of strings.
   
      Each language should have the same amount of resource strings.
      Each string should be attached to an identifier (key). 
      The software only knows the key of the text you want to display.
      Depending on the chosen output-language, the according value for that key will be parsed.

      ```
      <article>
          <p><%>hello_world<%>!</p>
          <p><%>it_is_me<%>!</p>
      </article>
      ```
      </details>
   6. Don't forget to care for exceptions. What happens if you try to translate a key while lacking an according Resource String in the current language?
</details>
<details>
     <summary>2. Template Engine (55)</summary>

###Develop the functionality of a Template Engine, in order to render Templates dynamically.

1. You can - for now - keep working in /js/kwm.js
2. Write a function that receives a **template**, a **container** and an [optional array](https://flexiple.com/optional-parameter-javascript/) **values** as parameters.
   1. The template-argument is a string that contains HTML-Markup. Within this string there can be tags like "<%>" and "<&>".
      1. A word within two <%>-tags is a key for translation.
      2. A word within two <&>-tags is a key for dynamic data.
      Example:
          ```
          <article>
              <p><%>my_name_is<%> <&>my_name<&></p>
          </article>
          ```
   2. The container-argument is an actual DOM-Element. This specifies, where the template should be rendered into.
   3. The values-array (optional) contains data, that is meant to be inserted into the <&>-reserved spaces.
3. Your function renderTemplate() parses through the characters of the template until it finds the occurrence of either "<%>" or "<&>".
   1. Finding this pattern for the first time means, that it is an opening-tag (for either language, or data).
   2. Keep on searching for the second occurrence of the same tag.
   3. Congratulations. You have found the first opening- and closing-tag pair of either a translation- or data-placeholder.
   4. Now replace the content between those two tags with...
      1. A proper translation from your **Translation-Engine** in the current set language for <%>-tags.
      2. Data from your **values** array for <&>-tags (you may use the first entry of the array for the first pair of <&> tags, and the second entry for the second pair etc.).
4. When you are done parsing through the whole template and replacing placeholders, paste the result into the container (overwride anything that was inside before).
5. Finish your function by dispatching an Event, telling the whole world that you did your job properly. 
   ```
   window.dispatchEvent(new CustomEvent("templateRendered"));
   ```
6. Enjoy your Cake 🍰!
    
<details>
<summary>Example</summary>
    
Given function-call:
   ```
   const template = "<p><%>my_name_is<%> <&>my_name<&>.</p><p><%>age<%>: <&>my_age<&></p>";
   const container = document.getElementById("target_for_template"); //You can find this container in your index.html
   const values = ["Ronald McDonald", 45]; //Feel free to change this values to your personal credentials.
   
   renderTemplate(template, container, values);
  ```

Wanted result on the front-page (depending on current language):
   ```
   <article id="target_for_template">
       <p>Mein Name ist Ronald McDonald.</p>
       <p>Alter: 45</p>
   </article>
  ```
</details>

</details>
<details>
<summary>3. Bonus: Useful JS-Functions (10)</summary>

### Write some useful JavaScript functions. You might need them any day.

1. isEmpty(variable) (3)
   1. Accepts **ANY** variable passed as argument
   2. returns true if:
      1. variable is null
      2. variable is undefined
      3. variable is an empty string
      4. variable is an empty object
      5. variable is an empty array
2. getOS() (2)
   1. Returns the Operating System of the client. OS is either
      1. Windows
      2. MacOS (acceptable also for iPad Pro & iPhone 6)
      3. Android
      4. iOS
3. clientHasCamera() (2)
   1. Returns true if the client posses a camera and our software is allowed to use it.
4. getIndexOfObjectInArrayByPropertyvalue(array, property, value) (3)
    1. Returns the Index of an bbject within an Array.
    2. The correct object is defined by its value of a property.
    <details>
    <summary>Example:</summary>

   ```
    const students = [ { name: "John", age: 20 }, { name: "Irina", age: 19 }, { name: "Ivan", age: 22 } ];
   
    let result = getIndexOfObjectInArrayByPropertyvalue(students, "name", "Irina");
    //Expected result: 1
    ```
   </details>
</details>