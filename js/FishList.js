/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module

import { Fish } from "./Fish.js";
import { getMostHolyFish } from "./fishData.js";
import { getSoldierFish } from "./FishData.js"
import { getUnWortyFish } from "./FishData.js"

export const FishList = () => {
    const holyFishes = getMostHolyFish();
    addFishToDom(holyFishes);
    const gotSoldierFish = getSoldierFish();
    addFishToDom(gotSoldierFish);
    const gotUnWortyFish = getUnWortyFish();
    addFishToDom(gotUnWortyFish);

}
const addFishToDom = (arrayofFish) => {
    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");


    // // Add to the existing HTML in the content element
    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of arrayofFish) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }

    contentElement.innerHTML += `${fishHTMLRepresentation}`
}