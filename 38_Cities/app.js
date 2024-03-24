"use strict";
function describe_city(city, country = "default country") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("Sydney", "Australia");
