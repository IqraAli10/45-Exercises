// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Original guest list
let guests: string[] = ["Hina", "Iqra", "Rabia", "Moiz"];

// Print statement for guest who can't make it
let guestWhoCantMakeIt: string = "Rabia";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// New person to invite
let newGuest: string = "Ahmed";

// Replace the guest who can't make it with the new guest
let indexOfGuestWhoCantMakeIt: number = guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newGuest;
}

// Print second set of invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
});
