import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem('token');

const api = axios.create({
	baseURL: API_URL + 'users',
	headers: {
		'Content-Type': 'application/json',
	},
});
