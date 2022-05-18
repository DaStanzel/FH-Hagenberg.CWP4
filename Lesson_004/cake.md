#CWP4 - Lesson_004

## In order to obtain the cake 🍰, solve the following tasks:

1. Change the webRoot in kwm.js accordingly 😎

<details>
    <summary>1. Language Menu (30)</summary>


###Include a Langauge-Switcher!
 ```
 In order to achieve full translatability, kwm.js was change:
 
 In its constructor, two methods are called to render each, the header and the footer.
 ```

Open /js/kwm-translator.js
1. Add a new method createLanguageMenu(container).
   1. This method should create a new unordered list and append it to container.
   2. For each language, the unordered list should append a list element with the language-key as text.
   3. Each list element needs a clickHandler, that invokes the ***static*** method changeLanguage();
2. Add a new static method changeLanguage();
   1. In this method, change the currentLangauge of kwm.translator to the according language.
   2. Also, call the changeView() Method of router, to re-render the currently active view.
   3. After that, the method should also call kwm.renderHeader() and kwm.renderFooter(), in order to re-render the header and footer sections.

Open /js/kwm.js
1. Now use the functionality, you just implemented to create a languageMenu in the container ***#languagemenu***, once the header-template is rendered.
</details>

<details>
    <summary>2. Favourites (70)</summary>

###Add favourites to your shop!

 ```
 The objective here is to store the IDs of your favourite Pets in the localstorage.
 To make it more fun, we choose to store them all in one array (localstorage.favouritePets) :}
 
 Hardmode: Store them in an indexedDB instead of localstorage!
 ```
         
1. Open js/kwm-model.js and add three methods:
   1. petIsFavourite(id)
      1. Receives an id and returns, whether or not this id is already a favourite.
   2. addFavouritePet(id)
      1. If the pet is not already a favourite, then add it.
   3. removeFavouritePet(id)
      1. if the pet is a favourite, change that.

    You can remove items from an Array with [Arrray.splice](https://www.w3schools.com/jsref/jsref_splice.asp)

     ```
     Splice Example:
     let delicious = ["Strawberry pie", "Sacher pie", "Apple pie", "Raspberry pie"];
     delicious.splice(3,1) //Removed raspbery pie, because it was too crunchy :}   
     ```
2. Compare the pet-overview.tpl from Lesson_003 with Lesson_004. You will find an indicator for the favourite-status of an item.
3. Now open views/view.shop.js
   1. So far, the code creates all Shop-elements (pets). Now make sure, that the pets already marked as favourites display accordingly, by adding "active" to their favourite-buttons classList.
   2. Also, attach eventhandlers (click) to all favourite-buttons.
      1. If the button does not have a class "active" yet, add it to its class list and add the according pet to your favourites.
      2. Else, remove the class and also remove the pet from your favourites.
</details>