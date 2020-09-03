import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";
import { sandBoxApi } from "./AxiosService.js";

class PlaylistService{
  async addSong() {
    let res = await sandBoxApi.post('', ProxyState.active)
    ProxyState.active = null
    ProxyState.playlist = [...ProxyState.playlist, new Song(res.data.data)]
  }
  setactive(id) {
    ProxyState.active = ProxyState.songs.find(s=> s._id == id)
  }

}
const PLAYLISTSERVICE = new PlaylistService();
export default PLAYLISTSERVICE