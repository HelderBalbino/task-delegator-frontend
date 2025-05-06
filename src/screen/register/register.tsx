import { register } from '../../service/userService';
import Form from './form';

function Register() {
	const handleRegister = async (values: {
		name: string;
		email: string;
		password: string;
		sector_name: string;
		company_name: string;
	}) => {
		try {
			const response = await register(values); // calls the register function from userService
			if (response.data) {
				console.log('Successfully Registered', response.data);
				return;
			}
		} catch (err) {
			return { email: 'Registering error, Try again please.' }; // handles the error if the registration fails
		}
	};

	return (
		<>
			<Form onSubmit={handleRegister} />
		</>
	);
}

export default Register;
