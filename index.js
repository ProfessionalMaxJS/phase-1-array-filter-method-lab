// Code your solution here

function findMatching(drivers, roster){
    // let foundMatching = [];
    function compareWithoutCase(driver){
        // debugger;
        return driver.toLowerCase() === roster.toLowerCase();
        // {
        // return drivers;
        // }
    }
    const foundMatching = drivers.filter(compareWithoutCase);
    return foundMatching;
}

function fuzzyMatch(drivers, initials){
    function findStart(drivers){
        return drivers.startsWith(initials);        
        // let length=initials.length;
        // if (drivers.slice(0, length)===initials){
        //     return drivers;
        // }
    }

const fuzzedMatch = drivers.filter(findStart);
return fuzzedMatch;
}

function matchName(drivers, givenName){
    const matchedNames = drivers.filter((drivers)=>drivers.name===givenName);
    return matchedNames;
}

/*
function matchName(drivers, givenName){
    const yaBoi = givenName
        function findName(yaBoi){
            console.log(yaBoi)
            console.log(drivers.name)
        return drivers.name===yaBoi;
        debugger;
        // {
        //     return drivers;
        // }
    }
    const matchedNames = drivers.filter(findName);
    return matchedNames;
}

// matchName([{name: "frank"}, {name: "joe"}, {name: "jim"}], "jon");
*/
