"use strict";
// part of 14
let guest_List = ["Isra", "Hooram", "Hunaiza"];
// for (let i = 0; i < guest_List.length; i++) {
//     console.log("Dear " + guest_List[i] + ",\n\nIt is our pleasure to invite you in our party and i'm waiting to your presence.\n\nThank You!\n\n");
// }
// part of 15
let absent_Guest = "Hooram";
let new_Guest = "Yamna";
guest_List[1] = new_Guest;
// for (let i = 0; i < guest_List.length; i++) {
//     console.log("Dear " + guest_List[i] + ",\n\nIt is our pleasure to invite you in our party and i'm waiting to your presence.\n\nThank You!\n\n");
// }
console.log(`${absent_Guest} is not coming to the party.`);
// part of 16
console.log("Good News! We find big table so we are invite 3 more guests.");
guest_List.unshift("Mirha");
guest_List.splice(2, 0, "Fakiha");
guest_List.push("orhan");
for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear " + guest_List[i] + ",\n\nJoin us for a delightful dinner gathering! You're invited to dine with us. Good food, great company, and memorable moments await. Looking forward to seeing you there.\n\nThank You!\n\n");
}
// part of 17
console.log("\nSorry we cannot arrange big table, Only two person will be invited.");
while (guest_List.length > 2) {
    let remove_Guest = guest_List.pop();
    console.log(`Sorry ${remove_Guest}, you are not invited for dinner.`);
}
for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear " + guest_List[i] + ",\n\nYou are stiil invited to dinner.\n\nThank You!\n\n");
}
guest_List.splice(0, 2);
console.log(guest_List);
