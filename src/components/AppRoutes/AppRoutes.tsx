import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Playlists } from '../../screens/PlayLists'
import { Songs } from '../../screens/Songs'

const AppRoutes = () => {
	return (
		<Container>
			<Routes>
				<Route index path="/songs" element={<Songs />} />
				<Route path="/playlists" element={<Playlists />} />
				<Route path="/*" element={<Songs />} />
			</Routes>
		</Container>
	)
}
export { AppRoutes }
