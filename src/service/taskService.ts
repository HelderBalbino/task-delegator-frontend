import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem('token');

const api = axios.create({
	baseURL: API_URL + 'tasks',
	headers: {
		'Content-Type': 'application/json',
	},
});

// Function to create a new task
// It sends a POST request to the API with the task data
export const createTask = async (data: {
	title: string;
	description: string;
	status: string;
	assigned_to_id: string;
}) => {
	return api.post('/task', data, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

// function to list all tasks
// It sends a GET request to the API with the token in the headers
export const getTasksByPage = async (page: number) => {
	return api.get(`/tasks/${page}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

// function to mark a task as in progress
// It sends a PUT request to the API with the task ID in the URL
export const inProgressTask = async (id: number) => {
	return api.put(
		`/task/in_progress/${id}`,
		{},
		{
			headers: { Authorization: `Bearer ${token}` },
		},
	);
};
