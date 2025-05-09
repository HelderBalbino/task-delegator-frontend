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
	const [tasks, setTasks] = useState<Task[]>([]); // state to store tasks
	const [currentPage, setCurrentPage] = useState(1); // state to store current page]
};
