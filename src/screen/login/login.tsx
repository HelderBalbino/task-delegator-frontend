import { useNavigate } from 'react-router-dom';
import Form from './form';
import { login } from '../../service/userService';

function Login() {
	const navigate = useNavigate();

	// function to handle form submission
	// it receives the values from the form and sends them to the API
	// if the API returns a token, it saves it in local storage and redirects to the dashboard
	// if the API returns an error, it returns the error to the form
	// it uses async/await to handle the asynchronous nature of the API call
	// it uses try/catch to handle errors
	// it uses the useNavigate hook from react-router-dom to redirect to the dashboard
	// it uses the login function from the userService to send the data to the API
	// it uses the Form component to render the form
	const handleSubmit = async (values: {
		email: string;
		password: string;
	}) => {
		try {
			const response = await login(values); // send the data to the API
			if (response.data) {
				localStorage.setItem('token', response.data.token); // save the token in local storage
				navigate('/dashboard'); // Redirect to the dashboard
			}
		} catch (err) {
			// if the API returns an error, return the error to the form
			return {
				email: 'Invalid Email or Password',
				password: 'Invalid Email or Password',
			};
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit} />
		</>
	);
}

export default Login;
