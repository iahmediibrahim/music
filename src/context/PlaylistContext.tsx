import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface Song {
	id: number
	title: string
	author: string
	album: string
	date: string
	time: string
}

export interface PlaylistItem {
	id: number
	name: string
	songs: Song[]
}

interface PlaylistContextProps {
	playlists: PlaylistItem[]
	currentPlaylist: PlaylistItem
	selectedPlaylistID: number
	setSelectedPlaylistID: (index: number) => void
	addToPlaylist: (song: Song) => void
	removeFromPlaylist: (index: number) => void
	createPlaylist: (name: string) => void
	addSongToPlaylist: (playlistId: number, song: Song) => void
}

const PlaylistContext = createContext<PlaylistContextProps>(
	{} as PlaylistContextProps,
)

export const usePlaylist = () => useContext(PlaylistContext)

interface PlaylistProviderProps {
	children: ReactNode
}

export const PlaylistProvider: React.FC<PlaylistProviderProps> = ({
	children,
}) => {
	const [playlists, setPlaylists] = useState<PlaylistItem[]>([])
	const [selectedPlaylistID, setSelectedPlaylistID] = useState<number>(0)

	const currentPlaylist = playlists.find(
		(playlist) => playlist.id === selectedPlaylistID,
	)!

	const addToPlaylist = (song: Song) => {
		const updatedPlaylists = [...playlists]
		updatedPlaylists[selectedPlaylistID].songs = [
			...currentPlaylist.songs,
			song,
		]
		setPlaylists(updatedPlaylists)
	}

	const removeFromPlaylist = (songId: number) => {
		setPlaylists((prevPlaylists) => {
			const updatedPlaylists = [...prevPlaylists]
			const selectedPlaylistIndex = updatedPlaylists.findIndex(
				(playlist) => selectedPlaylistID === playlist.id,
			)

			if (selectedPlaylistIndex !== -1) {
				updatedPlaylists[selectedPlaylistIndex].songs = updatedPlaylists[
					selectedPlaylistIndex
				].songs.filter((song) => song.id !== songId)
			}

			return updatedPlaylists
		})
	}
	const createPlaylist = (name: string) => {
		const newPlaylist: PlaylistItem = {
			id: Date.now(),
			name,
			songs: [],
		}
		setPlaylists([...playlists, newPlaylist])
		setSelectedPlaylistID(newPlaylist.id)
	}

	const addSongToPlaylist = (playlistId: number, song: Song) => {
		const updatedPlaylists = playlists.map((playlist) => {
			if (playlist.id === playlistId) {
				return {
					...playlist,
					songs: [...new Set([...playlist.songs, song])],
				}
			}
			return playlist
		})

		setPlaylists(updatedPlaylists)
	}
	const value: PlaylistContextProps = {
		playlists,
		currentPlaylist,
		selectedPlaylistID,
		addToPlaylist,
		setSelectedPlaylistID,
		removeFromPlaylist,
		createPlaylist,
		addSongToPlaylist,
	}

	return (
		<PlaylistContext.Provider value={value}>
			{children}
		</PlaylistContext.Provider>
	)
}
