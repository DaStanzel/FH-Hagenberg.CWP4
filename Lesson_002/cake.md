#CWP4 - Lesson_002
    Prerequisites:
      - Lesson_001
      - Translation Engine
      - Template Engine
## In order to obtain the cake 🍰-Emoji (so sorry 😢), solve the following tasks:

<details>
    <summary>1. Router (45)</summary>

###Develop a hash-based Single-Page-Applications Router!

Open /js/kwm-router.js and create a Router-Class (KWM_Router). 
   1. In its constructor, you expect to receive no arguments.
   2. Add a Member-Array this.routes. It should contain all the imported Views from the imports-section (Two right now).
   3. Also add extra members for the home and the 404-route. These are special routes you might want to adress specificly.
   4. Your router should have two methods: init() and changeView()
      1. The call of the init() Method should be the very last thing, the constructor does. This method adds an EventListener to the window-object. Listen carefully for the [hashChanged-Event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event). Just make sure, that the window-object does not have another listener to the same event.
      2. The changeView() method should be called, whenever the fragment identifier of the URL has changed 😉. Don't get confused by the two similar-looking terms "has changed" and "hashChanged".
         1. Since this method is called whenever we change the active route, its job is to find out which route should be rendered next.
         2. Iterate through all routes in this.routes and ask, if route.isActive() (you can expect a boolean-return from that method).
         3. The first route that calls responsible for the active [slug](https://developer.mozilla.org/en-US/docs/Glossary/Slug) should call its route.init() function.
         4. If there is no fitting route registered, serve them a nice piece of ... 404! But make sure to adjust the [location-hash](https://www.w3schools.com/jsref/prop_loc_hash.asp).
         5. Also think of the very beginning of the users journey, when there is not yet a hash in the url. What route might be suitable for that case, and how can you detect that case?
   5. Make the Router [importable](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) for another class.
   6. Add the Router to your Framework.
  
</details>
<details>
     <summary>2. Routes (35)</summary>

###Develop the functionality of all Routes. They will serve as Views in our MVC setting.

Open /js/kwm-router.js and create a Router-Class (KWM_Router).
   1. In its constructor, you expect to receive slug and init. Make them members of the route.
      1. Slug is a string, defining the path in the application that is bound to this route. Example: "/shop" or just "/" for home.
      2. Init is a function. Init will be executed, when the router activates this route.
   2. Add a Method for the Route-Class: isActive().
      1. Get the current hash with window.location.hash
      2. Cut the Slug out of that String
      3. Compare the Slug of that String with the Slug of this Route and return whether they match or not.
   3. Now make the Method a little bit cooler:
      1. Expect that URLs can contain Get-Paramters.
      2. There is a static method kwm.utils.getGetParameters() - But somehow it does not really provide you the parameters. Can you see what it is doing? [Get-Parameters](https://www.seobility.net/de/wiki/GET-Parameter)
      3. **BONUS**(3): Complete the kwm.utils.getGetParameters().
      4. In your IsActive() Method, use your utils wiseley to see, if there are any getParameters. If there are (means, there is a "?" in the URL), make sure to cut the correct substring for your slug-comparison. 
         If there is a Get-Parameter in your URL, the slug ends right before it.
         ```
         HINT:
         The slug for 
           https://www.kwmjs.at/#/shop?article=14
         is just "/shop"
         ```
</details>
<details>
<summary>3. Views (20)</summary>

### Your app needs some Views.

1. Open /views/view.home.js and **understand** the View.
   1. In Line 25, a new view-Object is created out of the Class you've just created.
      ```
         export let view = new KWM_Route("/", async function(){
            await this.rendering();
         });
      ```
   2. It get's "/" as its slug, and an asynchronous Function as its init-method.
   3. The init-method calls "this.rendering()", a method that is written in Line 29.
      ```
         view.rendering = async function(){
            await kwm.templater.renderTemplate("home", document.getElementById("kwmJS"));

            simplebutton.addEventListener("click", function(){
               alert("test");
            });
         };
      ```
   4. Obviously, in this method, the Templater is called to render a Template.
      1. The Templates name is "home". What does that mean? (Go check the Templater-Class and see how that parameter is used. You might need to configure your Framework-Core properly.).
      2. It also provides a Container "kwmJS". Can you find that container in the index.html?
   5. Once, the Templater is done, there an EventListener seems to be added to "simplebutton". What is Simplebutton? Where does this come from?
   6. Can you get this Code to work? (Goal: The click-alert is popping up).
2. Now create your own View (view.shop.js)
   1. Give it the slug "/shop"
   2. In its Init-Method, call an asynchronous Method "this.rendering" - just like in the home-view.
   3. The Rendering-Method should use the templater to render a template "shop.tpl", and render it right into "kwmJS".
   4. Since there is no shop.tpl yet, go ahead and create it. You can lean on the home.tpl here.
      1. Your Shop Template should contain a Headline that says "Our Shop" in English, and "Unser Shop" in German.
   5. Make sure, the router knows that this new View exists.
   6. Can you get this Code to work? 
   7. Now test your Navigation on the Website.
      1. Can you move from Home to Shop and back?
      2. Can you even use the Browsers Back-Button?
      3. What happens, when you click on "Contact"? Is your 404-Route called - as it should?
   8. Everything is working Great so far! Now go ahead, and create a Contact-View using the same steps.
   9. BONUS (4): Make this a nice looking contact-page.
3. **BONUS**(3): How can you proof, that this is a Single-Page-Application now?

</details>