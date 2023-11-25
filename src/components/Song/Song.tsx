import { Add, Check, Close } from '@mui/icons-material'
import { IconButton, TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Song as SongProps, usePlaylist } from '../../context/PlaylistContext'

interface ISongProps {
	song: SongProps
	isAllSongsScreen?: boolean
}

const Song: React.FC<ISongProps> = ({ song, isAllSongsScreen }) => {
	const { selectedPlaylistID, addSongToPlaylist, removeFromPlaylist } =
		usePlaylist()

	const handleAddToPlaylist = (song: SongProps) => {
		if (selectedPlaylistID !== null) {
			addSongToPlaylist(selectedPlaylistID, song)
			handleAddIcon()
		}
		return null
	}
	const [isAdded, setIsAdded] = useState(false)
	const handleAddIcon = () => {
		setIsAdded(true)
		setTimeout(() => setIsAdded(false), 1500) // Reset the animation after 1.5 seconds
	}
	const { id, title, author, album, date, time } = song
	return (
		<TableRow key={id}>
			<TableCell>{title}</TableCell>
			<TableCell>{author}</TableCell>
			<TableCell>{album}</TableCell>
			<TableCell>{date}</TableCell>
			<TableCell>{time}</TableCell>
			<TableCell>
				{isAllSongsScreen ? (
					<IconButton
						color="primary"
						onClick={() => {
							handleAddToPlaylist(song)
						}}
						disabled={selectedPlaylistID === 0 || isAdded}
					>
						{isAdded ? <Check /> : <Add />}
					</IconButton>
				) : (
					<IconButton color="primary" onClick={() => removeFromPlaylist(id)}>
						<Close />
					</IconButton>
				)}
			</TableCell>
		</TableRow>
	)
}

export { Song }
