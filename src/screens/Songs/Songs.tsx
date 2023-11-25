import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { SongList } from '../../components/SongList'
import { usePlaylist } from '../../context/PlaylistContext'

const Songs = () => {
	const { playlists, selectedPlaylistID, setSelectedPlaylistID } = usePlaylist()

	return (
		<Box className="Songs">
			<Box marginY={6}>
				<FormControl fullWidth>
					<InputLabel>Select Playlist</InputLabel>
					<Select
						value={
							selectedPlaylistID !== null ? selectedPlaylistID.toString() : ''
						}
						onChange={(e) => setSelectedPlaylistID(Number(e.target.value))}
					>
						<MenuItem value="" disabled>
							Choose a playlist
						</MenuItem>
						{playlists.map((playlist) => (
							<MenuItem key={playlist.id} value={playlist.id.toString()}>
								{playlist.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<SongList title="All Songs" songs={songList} isAllSongsScreen />
		</Box>
	)
}
export { Songs }
const songList = Array.from({ length: 20 }, (_, index) => ({
	id: index + Date.now(),
	title: `Song ${index + 1}`,
	author: `Author ${index + 1}`,
	album: `Album ${index + 1}`,
	date: `2023-11-24`,
	time: `03:30 PM`,
}))
