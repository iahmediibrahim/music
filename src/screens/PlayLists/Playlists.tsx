import { Box, Button, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CreatePlaylist } from '../../components/CreatePlaylist'
import { SongList } from '../../components/SongList'
import { usePlaylist } from '../../context/PlaylistContext'

const Playlists = () => {
	const { currentPlaylist } = usePlaylist()

	return (
		<Box className="Playlists">
			<Box marginTop={6}>
				<Typography variant="h4" gutterBottom>
					Playlists
				</Typography>
				<Typography gutterBottom>
					Select Playlist from the dropdown to view songs or create a new one
				</Typography>
			</Box>
			<CreatePlaylist />
			<Divider style={{ marginTop: '40px', marginBottom: '40px' }} />
			{currentPlaylist ? (
				currentPlaylist.songs.length === 0 ? (
					<>
						<Typography variant="h4" gutterBottom>
							{currentPlaylist.name} - No Songs in this playlist
						</Typography>

						<Button
							component={Link}
							to="/songs"
							variant="outlined"
							color="primary"
						>
							Add Songs
						</Button>
					</>
				) : (
					<SongList
						songs={currentPlaylist.songs}
						title={currentPlaylist.name + ' Songs'}
					/>
				)
			) : null}
		</Box>
	)
}
export { Playlists }
