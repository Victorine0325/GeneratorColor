let boite = document.querySelector(".boite");
let rgb = document.querySelector(".rgb")

function changementdecouleur() {
  let r = Math.floor(Math.random() *256);
  let g = Math.floor(Math.random() *256);
  let b = Math.floor(Math.random() *256);
  let couleur = `rgb(${r}, ${g}, ${b})`;

  boite.style.backgroundColor = couleur;
  rgb.textContent = couleur;
}
setInterval(changementdecouleur, 1000)

