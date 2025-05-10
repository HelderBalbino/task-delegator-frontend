import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for the hamburger menu and close button
import { Task } from '../../types/task';
import {
	getTasksByPage,
	inProgressTask,
	completeTask,
	deleteTask,
} from '../../services/taskService';
import AddUserModal from './modal/addUserModal';
import RemoveUserModal from './modal/removeUserModal';
import AddTaskModal from './modal/addTaskModal';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const [tasks, setTasks] = useState<Task[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [showAddUserModal, setShowAddUserModal] = useState(false);
	const [showRemoveUserModal, setShowRemoveUserModal] = useState(false);
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const name = localStorage.getItem('name');
	const role = localStorage.getItem('role');
	const company = localStorage.getItem('company');
	const sector = localStorage.getItem('sector');

	// function to load tasks
	const loadTasks = async (page: number) => {
		try {
			const response = await getTasksByPage(page);
			setTasks(response.data);
			setError(null);
		} catch (error) {
			console.error('Error loading tasks', error);
			setError('Error loading tasks. Try again please.');
		}
	};

	useEffect(() => {
		loadTasks(currentPage);
	}, [currentPage]);

	// function to set a task as in progress
	const handleInProgress = async (taskId: number) => {
		try {
			await inProgressTask(taskId);
			loadTasks(currentPage);
			setError(null);
		} catch (error) {
			console.error('Error in setting task as In Progress:', error);
			setError('Error in setting task as In Progress. Try again please.');
		}
	};

	// Function to set a task as completed
	const handleComplete = async (taskId: number) => {
		try {
			await completeTask(taskId);
			loadTasks(currentPage);
			setError(null);
		} catch (error) {
			console.error('Error in setting task as Completed:', error);
			setError('Error in setting task as Completed. Try again please.');
		}
	};

	// Function to delete a task
	const handleDeleteTask = async (taskId: number) => {
		try {
			await deleteTask(taskId);
			loadTasks(currentPage);
			setError(null);
		} catch (error) {
			console.error('Error in deleting task:', error);
			setError('Error in deleting task. Try again please.');
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		localStorage.removeItem('role');
		localStorage.removeItem('company');
		localStorage.removeItem('sector');
		navigate('/');
	};

	return (
		<div className='flex min-h-screen bg-gray-100'>
			{/* Overlay to close sidebar on mobile devices */}
			{isSidebarOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
					onClick={() => setIsSidebarOpen(false)}
				></div>
			)}
		</div>
	);
};
