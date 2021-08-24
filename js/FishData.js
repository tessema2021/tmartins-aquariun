/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */



export const getFish = () => {
    return fishCollection
}

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        image: "bluefish.jpg",
        species: "Trigger",
        length: 7,
        waterType: "Salt",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Mr Freeze",
        food: "Meal Worms",
        image: "cat.jpg",
        species: "Tang",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Florida"
    },
    {
        name: "Nemo",
        food: "Goldfish",
        image: "crazy-fish.jpg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
    {
        name: "Don Julio",
        food: "snails",
        image: "dopeyfish.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
    {
        name: "Karen",
        food: "Algae",
        image: "Gold.jpg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt",
        harvestLocation: "Puerto Rico"
    },
    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "orangefish.jpg",
        species: "Clownfish",
        length: 2,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "pinkfish.jpeg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "purplefish.jpg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "yellowbluefish.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },

]


export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fishtaco of fishCollection) {
        if (fishtaco.length % 3 === 0) {
            holyFishArray.push(fishtaco);
        }
    }

    return holyFishArray
}



export const getSoldierFish = () => {

    // 5, 10 ,20
    const soldierFishArray = [];
    for (const fishobj of fishCollection) {
        if (fishobj.length % 5 === 0) {
            soldierFishArray.push(fishobj)
        }

    }
    return soldierFishArray
}


export const getUnWortyFish = () => {
    const unWorthyFishArray = [];
    for (const fishWorth of fishCollection) {
        if (fishWorth.length % 5 !== 0 || fishWorth.length % 3 !== 0) {
            unWorthyFishArray.push(fishWorth)
        }
    }
    return unWorthyFishArray
}