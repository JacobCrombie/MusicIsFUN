import { ProxyState } from "../AppState.js";
import playlistService from "../Services/PlaylistService.js";

function _drawPlaylist() {
  let template = "";
  ProxyState.playlist.forEach((p) => (template += p.playlistTemplate));
  document.getElementById("playlist").innerHTML = template;
}
function _drawActive() {
  if (ProxyState.active) {
    return (document.getElementById("active").innerHTML =
      ProxyState.active.activeTemplate);
  }
  return (document.getElementById("active").innerHTML = "");
}
export default class PlaylistController {
  constructor() {
    ProxyState.on("playlist", _drawPlaylist);
    ProxyState.on("active", _drawActive);
    this.getPlaylist();
  }

  setActive(id) {
    playlistService.setactive(id);
  }
  addSong() {
    try {
      playlistService.addSong();
    } catch (error) {
      console.error(error);
    }
  }

  getPlaylist() {
    try {
      playlistService.getPlaylist();
    } catch (error) {
      console.error(error);
    }
  }

  removeSong(id) {
    try {
      playlistService.removeSong(id);
    } catch (error) {
      console.error(error);
    }
  }
}
