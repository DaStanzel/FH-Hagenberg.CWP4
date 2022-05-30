"use strict";
const API = "https://api.neuwersch.kwmhgb.at/wp-json/acf/v3/kwm_pet"
export default class KWM_Model {
    constructor() {
        this.pets = [];
    }

    async getAllPets(){
        return new Promise(async function(resolve) {
            if(!kwm.utils.isEmpty(kwm.model.pets))
                resolve(kwm.model.pets);
            else{
                await fetch(API).then(response=>response.json())
                    .then(pets => {
                        for(let pet of pets)
                            kwm.model.pets.push(pet);
                        resolve(kwm.model.pets);
                    })
                resolve(kwm.model.pets);
            }
        });
    }

    petIsFavourite(id){
        if(!kwm.utils.isEmpty(localStorage.favouritePets))
            return JSON.parse(localStorage.favouritePets).includes(id.toString());
        return false;
    }

    addFavouritePet(id){
        if(!this.petIsFavourite(id)) {
            if (!kwm.utils.isEmpty(localStorage.favouritePets)) {
                let favourites = JSON.parse(localStorage.favouritePets);
                favourites.push(id);
                localStorage.favouritePets = JSON.stringify(favourites);
            } else
                localStorage.favouritePets = JSON.stringify([id]);
        }
    }

    removeFavouritePet(id){
        if(this.petIsFavourite(id)){
            let favourites = JSON.parse(localStorage.favouritePets);
            let index = favourites.indexOf(id);
            if (index !== -1) {
                favourites.splice(index, 1);
                localStorage.favouritePets = JSON.stringify(favourites);
            }
        }
    }
}