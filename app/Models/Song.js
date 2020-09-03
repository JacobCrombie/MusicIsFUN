export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class="card col-12">
      <div class="card-body d-flex flex-direction-column">
        <img class="listImg" src="${this.albumArt}" alt="">
        <h5 class="card-title">${this.title}</h5>
        <h6 class="card-subtitle text-muted">${this.artist} - ${this.album}</h6>
      </div>
    </div>
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
