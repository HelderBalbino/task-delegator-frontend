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

export const login = async (data: { email: string; password: string }) => {
	return api.post('/login', data);
};

export const registerUser = async (data: {
	name: string;
	email: string;
	password: string;
}) => {
	return api.post('/register-user', data, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const getUsers = async () => {
	return api.get(`/users`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const getUserById = async (id: string) => {
	return api.get(`/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const updateUser = async (
	id: string,
	data: { name?: string; email?: string; password?: string },
) => {
	return api.put(`/${id}`, data, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const deleteUser = async (id: string) => {
	return api.delete(`/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};
