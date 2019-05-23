// function greeter(person: string) {
//   return "Salam, " + person;
// }
//
// let user = "Shaheryar Wasim";
//
// document.body.innerHTML = greeter(user);

// interface Persons {
//   // ye object kis shakal ki hogi. pata hoga k kia aaye ga and agr nahi aaya tou pata chale ga.
//   firstName: string;
//   lastName: string;
// }
//
// function greeters(persons: Persons) {
//   return "Hello, " + persons.firstName + " " + persons.lastName;
// }
//
// let user1 = { firstName: "Jane", lastName: "User" };
//
// document.body.innerHTML = greeters(user1); //inner.html overwrite hojata hai so is wajah se no shaheryar wasim

// interface Dukaan {
//   name: string;
//   place: string;
// }
//
// interface meat {
//   location: Dukaan;
//   type: types1;
//   number: number;
// }
//
// interface types1 {
//   Chicken: string;
//   beef: string;
// }
//
// function logic(food: meat) {
//   console.log(food);
//   return 'dekh le yaar khol k console ajeeb '
// }
//
// let getfood = logic({
//   location: {
//     name: "Usairim Gosht ki dukaan",
//     place: "Garden west or east whatever u call !"
//   },
//   number: 56,
//   type: { Chicken: "adeel", beef: "king" } //jitne mein ne meat k andr cheezein a=daali hein utni he call krne k waqt aayen gi
// });
// document.body.innerHTML = getfood
