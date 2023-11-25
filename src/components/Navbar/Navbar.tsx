import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					Music Playlist App
				</Typography>
				<Button component={Link} to="/playlists" color="inherit">
					Playlists
				</Button>
				<Button component={Link} to="/songs" color="inherit">
					Songs
				</Button>
			</Toolbar>
		</AppBar>
	)
}
export { Navbar }
