import { createSlice } from '@reduxjs/toolkit';
import AlbumList from "../../data/albums";

export const albumLibrarySlice = createSlice({
    name: 'albumLibrary',
    initialState: AlbumList,
    reducers: {
        setAlbums: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { setAlbums } = albumLibrarySlice.actions

export default albumLibrarySlice.reducer