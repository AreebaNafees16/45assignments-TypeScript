var personName = "imran khan";
//Upper case
console.log("uppercase:", personName.toUpperCase());
//Lower case
console.log("lowercase:", personName.toLowerCase());
// Title case
console.log("titlecase:", personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" "));
