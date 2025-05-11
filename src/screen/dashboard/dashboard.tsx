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

			{/* Sidebar */}
			<div
				className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4 transform transition-transform duration-200 ease-in-out ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} lg:translate-x-0 lg:static lg:flex lg:flex-col lg:flex-shrink-0 z-50`}
			>
				{/* Botton to close (visible only in mobile devices) */}
				<button
					onClick={() => setIsSidebarOpen(false)}
					className='lg:hidden absolute top-2 right-2 p-2 text-white hover:text-gray-300'
				>
					<FaTimes size={24} />
				</button>

				<h1 className='text-2xl font-bold mb-6'>Dashboard</h1>
				<div className='mb-8'>
					<h2 className='text-lg font-semibold'>{name}</h2>
					<p className='text-sm text-gray-400'>
						Sector: {sector} | Company: {company}
					</p>
				</div>
				<nav>
					<ul className='space-y-2'>
						{role === 'admin' && (
							<>
								<li>
									<button
										onClick={() => {
											setShowAddUserModal(true);
											setIsSidebarOpen(false);
										}}
										className='w-full text-left px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700'
									>
										Add User
									</button>
								</li>
								<li>
									<button
										onClick={() => {
											setShowRemoveUserModal(true);
											setIsSidebarOpen(false);
										}}
										className='w-full text-left px-4 py-2 bg-red-600 rounded-md hover:bg-red-700'
									>
										Remove user
									</button>
								</li>
								<li>
									<button
										onClick={() => {
											setShowAddTaskModal(true);
											setIsSidebarOpen(false);
										}}
										className='w-full text-left px-4 py-2 bg-green-600 rounded-md hover:bg-green-700'
									>
										Add Task
									</button>
								</li>
							</>
						)}
						<li>
							<button
								onClick={logout}
								className='w-full text-left px-4 py-2 bg-red-600 rounded-md hover:bg-red-700'
							>
								Sign Out
							</button>
						</li>
					</ul>
				</nav>
			</div>

			{/* Main content */}
			<div className='flex-1 p-8'>
				{/* hamburger button, only visible in mobile devices */}
				<div className='flex flex-row-reverse'>
					<button
						onClick={() => setIsSidebarOpen(isSidebarOpen)}
						className='lg:hidden p-2 bg-gray-800 text-white rounded-md mb-4'
					>
						<FaBars size={24} />
					</button>
				</div>

				{/* show errors */}
				{error && (
					<div className='mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md'>
						{error}
					</div>
				)}
				{/* Task list */}
				{/* Listagem de Tarefas */}
				<div>
					<h2 className='text-xl font-bold mb-4'>Tasks</h2>
					<ul className='space-y-4'>
						{tasks.map((task) => (
							<li
								key={task.id}
								className='p-4 bg-white  rounded-md shadow-sm'
							>
								<h3 className='font-bold'>{task.title}</h3>
								<p className='text-gray-600'>
									{task.description}
								</p>
								<p className='text-sm text-gray-500'>
									Status:{' '}
									{task.status == 'pending'
										? 'pending'
										: task.status == 'in_progress'
										? 'in progress'
										: 'completed'}
								</p>
								<div className='flex gap-2 mt-2'>
									<button
										onClick={() =>
											handleInProgress(task.id)
										}
										className='px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600'
									>
										In Progress
									</button>
									<button
										onClick={() => handleComplete(task.id)}
										className='px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600'
									>
										Completed
									</button>
									{role === 'admin' && (
										<button
											onClick={() =>
												handleDeleteTask(task.id)
											}
											className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600'
										>
											Remove
										</button>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* pagination*/}
			<div className='flex justify-center mt-8'>
				<button
					onClick={() =>
						setCurrentPage((prev) => Math.max(prev - 1, 1))
					}
					className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300'
				>
					Previous
				</button>
				<span className='mx-4 text-lg'>{currentPage}</span>
				<button
					onClick={() => setCurrentPage((prev) => prev + 1)}
					className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300'
				></button>
			</div>
		</div>
	);
};
