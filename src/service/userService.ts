import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem('token');

const api = axios.create({
	baseURL: API_URL + 'users',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const register = async (data: {
	name: string;
	email: string;
	password: string;
	sector_name: string;
	company_name: string;
}) => {
	return api.post('/register', data);
};
