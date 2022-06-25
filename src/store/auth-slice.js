import { createSlice } from '@reduxjs/toolkit';

const initAuth = { isAuthed: false };

export const authSlice = createSlice({
	name: 'auth',
	initialState: initAuth,
	reducers: {
		login(state) {
			state.isAuthed = true;
		},
		logout(state) {
			state.isAuthed = false;
		},
	},
});

export const authActions = authSlice.actions;
