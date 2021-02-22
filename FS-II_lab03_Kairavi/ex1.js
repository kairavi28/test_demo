findFacts("Toronto");


function findFacts(city) {
    let findFacts = {
        name: city,
        population: "6,197,000",
        continent: "North America"
    };
    console.log("findFacts", findFacts);
    console.log(findFacts.name + " has a population of " + findFacts.population + " and is located in " + findFacts.continent);
}