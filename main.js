import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";
import { renderPlayingInfo, updateTitle } from "./js/ui.js";

const api = new API();

// helpte yazdığımızı burada import edeceğiz
// elements forma gönderme olayı ekle
// event yöntemi ile sayfa yenilemeyi önle

//* form gönderildiği anda api ye istek at ve gelen cevabı ekrana yazdır.
elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  const query = e.target[0].value; //* input içindeki degere ulaştık

  if (!query) {
    alert("lütfen bir müzik ismi giriniz!");
    return; //*burada durdurmak için return
  }
  updateTitle(`${query} için Sonuçlar`);
  api.searchMusic(query);
});
//*sayfa yüklendiği anda api ye isatek atıp popüler müzikleri getir.
document.addEventListener("DOMContentLoaded", async () => {
  await api.topPopular();
});

//** müziğin urlini html e aktardım */
const playMusic = (url) => {
  elements.audioSource.src = url;
  //* audio elementinin müziği yüklenmesini sagladık
  elements.audio.load();
  //** audio elementinin müziği oynatmasını saglar*/
  elements.audio.play();
};

//* istediğm yere tıkladığımda o yer konsolda yer aldı
//** listede tıklamalarda çalışır */
const handleClick = (e) => {
  console.log("tıklanıldı");
  if (e.target.id === "");
  {
    const parent = e.target.closest(".card");
    //parentElement yerine kullanırız. en yakın ebevyne götürür.
    renderPlayingInfo(parent.dataset);
    console.log(parent.dataset);
    //* müziği çalar
    playMusic(parent.dataset.url);
  }
};

//*** Liste alanındaki tıklamaları izler */
document.addEventListener("click", handleClick);
//** fotoyu döndürür */
const animatePhoto = () => {
  const img = document.querySelector(".info img");
  img.className = "animate";
};
//* img etiketine ekledğimiz animate classımnı kaldırır.
const stopAnimation = () => {
  const img = document.querySelector(".info img");
  img.classList.remove("animate");
};
//* müzik oynatma çalma ve durdurma olayları
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);
