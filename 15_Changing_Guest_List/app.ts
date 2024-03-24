// part of 14
let guest_List: string[] = ["Isra", "Hooram", "Hunaiza"];
for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear " + guest_List[i] + ",\n\nIt is our pleasure to invite you in our party and i'm waiting to your presence.\n\nThank You!\n\n")

}
// part of 15
let absent_Guest: string = "Hooram";

let new_Guest: string = "Yamna";
guest_List[1] = new_Guest;

for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear " + guest_List[i] + ",\n\nIt is our pleasure to invite you in our party and i'm waiting to your presence.\n\nThank You!\n\n")

}

console.log(`${absent_Guest} is not coming to the party.`);