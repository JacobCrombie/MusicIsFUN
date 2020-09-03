import SongsController from "./Controllers/SongsController.js";
import PlaylistController from "./Controllers/PlaylistController.js";

class App {
  constructor() {
    this.songsController = new SongsController();
    this.playlistController = new PlaylistController();
  }
}

window["app"] = new App();
