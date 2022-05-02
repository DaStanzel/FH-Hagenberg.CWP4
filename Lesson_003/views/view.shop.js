"use strict";
import KWM_Route from '../js/kwm-route.js?v=0.2';

/*******************************************************************************
 *
 *     KWM - 2022-03-30
 *******************************************************************************/

export let view = new KWM_Route("/shop", async function(){
    await this.rendering();
});

view.rendering = async function(){
    await kwm.templater.renderTemplate("shop", document.getElementById("kwmJS"));
};