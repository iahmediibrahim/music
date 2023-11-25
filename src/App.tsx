import { PlaylistProvider } from './context/PlaylistContext'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './components/AppRoutes'
import { Navbar } from './components/Navbar'
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})
function App() {
	return (
		<Router>
			<PlaylistProvider>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Navbar />
					<AppRoutes />
				</ThemeProvider>
			</PlaylistProvider>
		</Router>
	)
}

export default App
