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
                            kwm.model.pets.push(pet.acf);
                        resolve(kwm.model.pets);
                    })
                resolve(kwm.model.pets);
            }
        });
    }
}