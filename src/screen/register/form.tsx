import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LuClipboardList } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

// define the props for the form
interface FormProps {
	onSubmit: (values: {
		name: string;
		email: string;
		password: string;
		sector_name: string;
		company_name: string;
	}) => Promise<void | { [key: string]: string }>;
}

function Form({ onSubmit }: FormProps) {
	const navigate = useNavigate();

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('Invalid Email')
			.required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		sector_name: Yup.string().required('Sector is required'),
		company_name: Yup.string().required('Company is required'),
	});

	// formik configuration
	// useFormik is a hook that helps manage form state and validation
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			sector_name: '',
			company_name: '',
		},
		validationSchema,
		onSubmit: async (values, { setErrors }) => {
			const errors = await onSubmit(values); // executes the onSubmit function passed as a prop
			if (errors) {
				setErrors(errors); // Define os erros no Formik, se houver
			} else {
				navigate('/'); // Redireciona para a tela de login após o registro
			}
		},
	});

	return (
		<div className='flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='border-0 shadow-2xl shadow-gray-600 rounded-3xl p-4 sm:mx-auto sm:w-full sm:max-w-sm'>
				<div className='flex align-center justify-center'>
					<div>
						<LuClipboardList size={50} />
					</div>
					<h1 className='text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
						Projeto de Tarefas
					</h1>
				</div>

				<h2 className='mt-2 text-center text-sm/6 text-gray-600'>
					Crie sua conta
				</h2>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={formik.handleSubmit} className='space-y-6'>
						{/* Campo de Nome */}
						<div>
							<label
								htmlFor='name'
								className='block text-sm/6 font-medium text-gray-900'
							>
								Nome
							</label>
							<div className='mt-2'>
								<input
									id='name'
									name='name'
									type='text'
									autoComplete='name'
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
								{formik.touched.name && formik.errors.name ? (
									<p className='text-red-500 text-sm mt-1'>
										{formik.errors.name}
									</p>
								) : null}
							</div>
						</div>

						{/* Campo de Email */}
						<div>
							<label
								htmlFor='email'
								className='block text-sm/6 font-medium text-gray-900'
							>
								Email
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
								{formik.touched.email && formik.errors.email ? (
									<p className='text-red-500 text-sm mt-1'>
										{formik.errors.email}
									</p>
								) : null}
							</div>
						</div>

						{/* Campo de Senha */}
						<div>
							<label
								htmlFor='password'
								className='block text-sm/6 font-medium text-gray-900'
							>
								Senha
							</label>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='new-password'
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
								{formik.touched.password &&
								formik.errors.password ? (
									<p className='text-red-500 text-sm mt-1'>
										{formik.errors.password}
									</p>
								) : null}
							</div>
						</div>

						{/* Campo de Setor */}
						<div>
							<label
								htmlFor='sector_name'
								className='block text-sm/6 font-medium text-gray-900'
							>
								Setor
							</label>
							<div className='mt-2'>
								<input
									id='sector_name'
									name='sector_name'
									type='text'
									autoComplete='sector_name'
									value={formik.values.sector_name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
								{formik.touched.sector_name &&
								formik.errors.sector_name ? (
									<p className='text-red-500 text-sm mt-1'>
										{formik.errors.sector_name}
									</p>
								) : null}
							</div>
						</div>

						{/* company field*/}
						<div>
							<label
								htmlFor='company_name'
								className='block text-sm/6 font-medium text-gray-900'
							>
								Company Name
							</label>
							<div className='mt-2'>
								<input
									id='company_name'
									name='company_name'
									type='text'
									autoComplete='company_name'
									value={formik.values.company_name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
								{formik.touched.company_name &&
								formik.errors.company_name ? (
									<p className='text-red-500 text-sm mt-1'>
										{formik.errors.company_name}
									</p>
								) : null}
							</div>
						</div>

						{/* submit button */}
						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Registrar
							</button>
						</div>
					</form>

					{/* Link para Login */}
					<p className='mt-10 text-center text-sm/6 text-gray-500'>
						Already have an account?{' '}
						<a
							href='/'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Login
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Form;
