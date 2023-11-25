import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
} from '@mui/material'
import { useState } from 'react'
import { usePlaylist } from '../../context/PlaylistContext'
const CreatePlaylist = () => {
	const {
		playlists,
		selectedPlaylistID,
		setSelectedPlaylistID,
		createPlaylist,
	} = usePlaylist()
	const [newPlaylistName, setNewPlaylistName] = useState<string>('')

	const handleCreatePlaylist = () => {
		if (newPlaylistName.trim() !== '') {
			createPlaylist(newPlaylistName)
			setNewPlaylistName('')
		}
	}
	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item xs={12}>
				<Paper elevation={3} style={{ padding: '20px' }}>
					<FormControl fullWidth>
						<InputLabel>Select Playlist</InputLabel>
						<Select
							value={selectedPlaylistID}
							label="Select Playlist"
							onChange={(e) => setSelectedPlaylistID(e.target.value as number)}
						>
							{playlists.map((playlist) => (
								<MenuItem key={playlist.id} value={playlist.id}>
									{playlist.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Grid container spacing={2} alignItems="center" marginTop={2}>
						<Grid item xs={8}>
							<TextField
								label="New Playlist Name"
								fullWidth
								value={newPlaylistName}
								onChange={(e) => setNewPlaylistName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={4}>
							<Button
								variant="outlined"
								color="primary"
								onClick={handleCreatePlaylist}
								disabled={newPlaylistName.trim() === ''}
								size="large"
							>
								Create Playlist
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	)
}
export { CreatePlaylist }
