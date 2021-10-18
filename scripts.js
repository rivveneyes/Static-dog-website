// const navigation = document.getElementById("navigation");
// const divOne = document.getElementById("div2");
// const displayDogs = document.getElementsByClassName("dogsDisplay");

// async function getDogs() {
//   dogImages = await fetch("https://dog.ceo/api/breeds/image/random/3").then(
//     (res) => res.json()
//   );
//   dogImages.message.forEach((element, idx) => {
//     displayDogs[idx].src = element;
//   });
// }

// getDogs();

// window.onscroll = () => {
//   Sticknav();
// };

// ======functions
function Sticknav() {
  if (navigation.offsetHeight < window.pageYOffset) {
    navigation.classList.add("stickNav");
  } else {
    navigation.classList.remove("stickNav");
  }
}
