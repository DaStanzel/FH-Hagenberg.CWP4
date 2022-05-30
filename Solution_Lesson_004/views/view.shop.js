"use strict";
import KWM_Route from '../js/kwm-route.js?v=0.2';

/*******************************************************************************
 *
 *     KWM - 2022-03-30
 *******************************************************************************/

export let view = new KWM_Route("/shop", async function(){
    await kwm.model.getAllPets();
    await this.rendering();
});

view.rendering = async function(){
    await kwm.templater.renderTemplate("shop", document.getElementById("kwmJS"));
    for(const pet of kwm.model.pets){
        let petBox = document.createElement("div");
        petBox.classList.add("pet");
        petBox.dataset.id = pet.id;
        document.getElementById("pets").append(petBox);
        await kwm.templater.renderTemplate("shop.pet-overview", petBox, pet.acf);
        if(kwm.model.petIsFavourite(pet.id))
            document.querySelector(".pet[data-id='"+pet.id+"'] .❤️").classList.add("active");
    }

    let favouriteSwitchers = document.getElementsByClassName("❤️");
    for(let fav of favouriteSwitchers){
        fav.addEventListener("click", function(){
            if(this.classList.contains("active")){
                this.classList.remove("active");
                kwm.model.removeFavouritePet(this.closest(".pet").dataset.id);
            } else{
                this.classList.add("active");
                kwm.model.addFavouritePet(this.closest(".pet").dataset.id);
            }
        });
    }

};