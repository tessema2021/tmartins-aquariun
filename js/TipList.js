import { getData } from "./tipData.js";
import { tip } from "./tip.js";

export const TipList = () => {


    const contentElement = document.querySelector(".tip-page");
    const allTips = getData();


    let tipHTMLRepresentation = "";
    for (const oneTip of allTips) {
        tipHTMLRepresentation += tip(oneTip);
    }

    contentElement.innerHTML += `${tipHTMLRepresentation}`
}