import { elements } from "./helpers.js";
export const renderSearchMusic = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    console.log(song);
    const div = document.createElement("div");

    //*kart datasına kart elemanına bazı verileri ekleme;
    div.dataset.url = song.hub.actions.pop().url;
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;

    div.className = "card";
    console.log(div);

    div.innerHTML = `
  <figure>
              <img
                src="${song.images.coverart}"
                alt=""
              />
              <div class="play">
                <i class="bi bi-play-circle" id="play-btn"></i>
              </div>
            </figure>
            <h4>${song.subtitle}</h4>
            <h4>${song.title.slice(0, 15) + "..."}</h4>
  `;
    elements.list.appendChild(div);
  });
};
//* Başlığı aldığı parametreye göre günceller
export const updateTitle = (message) => {
  elements.title.textContent = message;
};
//*** gönderdiğimiz şarkılar geliyor mu kontrol edelim */
//** div kart oluşturcaz onun üzerinden devam edeceğiz */
//** popülermüzikleri ekrana yazdırır. */
export const renderSongs = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    const div = document.createElement("div");

    div.dataset.url = song.preview_url;
    div.dataset.title = song.name;
    div.dataset.img = song.album.images[1].url;

    //* yazdığımız bu kodla tanımladığımız yapıyı çagırdık ;
    div.className = "card";
    div.innerHTML = `
    <figure>
              <img
                src="${song.album.images[1].url}"
                alt=""
              />
              <div class="play">
                <i class="bi bi-play-circle" id="play-btn"></i>
              </div>
            </figure>
            <h4>${song.album.artists[0].name}</h4>
            <h4>${song.name.slice(0, 15) + "..."}</h4>
    
    `;
    elements.list.appendChild(div);
  });
};
//*** playinginfo kısmına resmi ve title aktardık */
export const renderPlayingInfo = (song) => {
  console.log(song);
  console.log(elements.playingInfo);
  elements.playingInfo.innerHTML = `
  <img
  src="${song.img}"
  class="animate"
  id="info-img"
  alt=""
/>
<div>
  <p>Şuan Oynatılıyor.</p>
  <h3>${song.title}</h3>
</div>`;
};
