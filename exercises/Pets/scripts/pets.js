let pets = [
  {
    name: "Rubby",
    type: "Dog",
    breed: "Corgi",
    bestTrick: "Tug of war",
    image: "images/rubby.com",
  },
  {
    name: "Howdy",
    type: "Dog",
    breed: "Mixed Breed",
    bestTrick: "Go find it!",
    image: "images/howdy.com",
  },
  {
    name: "KitKit",
    type: "Cat",
    breed: "American Shorthair",
    bestTrick: "Commanding his owner to feed him",
    image: "images/kitkit.com",
  },
  {
    name: "Lil' Miss",
    type: "Cat",
    breed: "Tabby",
    bestTrick: "Looking aloof",
    image: "images/lilmiss.com",
  },
  {
    name: "Happy",
    type: "Dog",
    breed: "Golden Retriever",
    bestTrick: "Refusing to retrieve!",
    image: "images/happy.com",
  },
  {
    name: "Piper",
    type: "Dog",
    breed: "Beagle",
    bestTrick: "Find it!  Dropped food edition!",
    image: "images/piper.com",
  },
  {
    name: "Spooky",
    type: "Cat",
    breed: "Mixed",
    bestTrick: "Gymnastics!",
    image: "images/spooky.com",
  },
];

const petTable = document.querySelector("#petTable")
const petTableBody = document.querySelector("#petTableBody");

function displayTableBody() {
  for (const pet of pets) {
    let row = petTableBody.insertRow();
    let cell1 = row.insertCell(0);
    cell1.innerText = pet.name;
    let cell2 = row.insertCell(1);
    cell2.innerText = pet.type;
    let cell3 = row.insertCell(2);
    cell3.innerText = pet.breed;
    let cell4 = row.insertCell(3);
    cell4.innerText = pet.bestTrick;
    let cell5 = row.insertCell(4);
    cell5.innerText = pet.image;
  }
}

window.onload = displayTableBody;
