import { renderSearchMusic, renderSongs } from "./ui.js";
//* inputa girilen veriye göre aratacagımız aip nin keyi
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d9f804d333mshd3191e28a9e013fp1f2fe4jsn208b1acc4919",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

//* popüler müzikleri getireceğimiz api key
const optionsTop = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d9f804d333mshd3191e28a9e013fp1f2fe4jsn208b1acc4919",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};
export class API {
  constructor() {
    this.songs = [];
  }

  //* inputa girilen veriye göre apiden cevabı getirir.
  async searchMusic(query) {
    try {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}=&locale=tr-TR&limit=5`,
        options
      );

      const data = await res.json();
      let newData = data.tracks.hits;
      newData = newData.map((song) => ({ ...song.track }));

      this.songs = newData;
    } catch (err) {
      console.log(err);
    }

    //* ekrana apiden gelen her bir şarkıyı yazdıracağımız method
    renderSearchMusic(this.songs);
  }
  async topPopular() {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry";
    try {
      //* api ye fetch isteğini at
      const response = await fetch(url, optionsTop);
      //* veriyi json formatına çevir
      const result = await response.json();
      //* tanımladığınız song dizisine gelen cevabı aktar
      this.songs = result.tracks;
      renderSongs(this.songs);
    } catch (error) {
      console.log(error);
    }
  }
}
