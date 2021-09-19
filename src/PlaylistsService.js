const { Pool } = require("pg")

class PlaylistsService {
	constructor() {
		this._pool = new Pool()
	}

	async getPlaylistSongs(playlistId) {
		const query = {
			text: "SELECT songs.id, songs.title, songs.performer FROM playlistsongs JOIN songs ON playlistsongs.song_id=songs.id WHERE playlistsongs.playlist_id= $1",
			values: [playlistId]
		}
		const result = await this._pool.query(query)
		return result.rows
	}
}

module.exports = PlaylistsService
