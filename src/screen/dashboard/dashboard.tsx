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
			setError('.Error loading tasks. Try again please.');
		}
	};
};
