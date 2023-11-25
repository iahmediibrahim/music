import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import React from 'react'
import { Song as SongProps } from '../../context/PlaylistContext'
import { Song } from '../Song'

interface SongListProps {
	songs: SongProps[]
	title: string
	isAllSongsScreen?: boolean
}

const SongList: React.FC<SongListProps> = ({
	songs,
	title,
	isAllSongsScreen = false,
}) => {
	return (
		<Box className="song-list">
			<Typography variant="h4" marginBottom={4}>
				{title}
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Author</TableCell>
							<TableCell>Album</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Time</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{songs.map((song) => (
							<Song
								key={song.id}
								song={song}
								isAllSongsScreen={isAllSongsScreen}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export { SongList }
