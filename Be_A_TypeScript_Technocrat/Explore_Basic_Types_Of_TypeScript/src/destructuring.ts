// object destructuring
// array destructuring

const user44 = {
  id: 123,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Forhan",
  },
  gender: "male",
  favouriteColor: "black",
};

//const myFavouriteColor = user44.favouriteColor
//const myMiddleName = user44.name.middleName

const {
  favouriteColor,
  name: { middleName: myMiddleName },
} = user44;

//console.log(myMiddleName);

const friends44 = ["karim", "Rahim", "Mahim"];

const [, , myBestFriend] = friends44;

console.log(myBestFriend);