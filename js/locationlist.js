import { locationData } from "./locationData.js";
import { location } from "./location.js";

export const locationList = () => {
    const contentElement = document.querySelector(".location-list");
    const allLocations = locationData();


    let locationHTMLRepresentaion = "";
    for (const oneLocation of allLocations) {
        locationHTMLRepresentaion += location(oneLocation)
    }
    contentElement.innerHTML += `${locationHTMLRepresentaion}`
}