import Form from './form';
import { register } from '../../services/userService';

function Register() {
	const handleRegister = async (values: {
		name: string;
		email: string;
		password: string;
		sector_name: string;
		company_name: string;
	}) => {
		try {
			const response = await register(values); // Chama a função de registro da API
			if (response.data) {
				console.log('Registro bem-sucedido:', response.data);
				return; // Retorna sem erros
			}
		} catch (err) {
			return { email: 'Erro ao registrar. Tente novamente.' }; // Retorna erros
		}
	};

	return (
		<>
			<Form onSubmit={handleRegister} />
		</>
	);
}

export default Register;
