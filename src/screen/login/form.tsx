import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LuClipboardList } from 'react-icons/lu';

// define the components props
interface FormProps {
	onSubmit: (values: {
		email: string;
		password: string;
	}) => Promise<void | { email?: string; password?: string }>;
}

function Form({ onSubmit }: FormProps) {
	//yup validation schema
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Email inválido')
			.required('Email é obrigatório'),
		password: Yup.string()
			.min(6, 'A senha deve ter pelo menos 6 caracteres')
			.required('Senha é obrigatória'),
	});

	// Formik configuration
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: async (
			values: { email: string; password: string },
			{ setErrors }: { setErrors: (errors: any) => void },
		) => {
			const errors = await onSubmit(values); // executes the onSubmit function passed as a prop
			// if the onSubmit function returns errors, set them in Formik
			if (errors) {
				setErrors(errors); // if there are errors, set them in Formik
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
					Entre com suas credenciais
				</h2>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={formik.handleSubmit} className='space-y-6'>
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
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm/6 font-medium text-gray-900'
								>
									Senha
								</label>
								<div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Esqueceu a senha?
									</a>
								</div>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
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

						{/* Botão de Submissão */}
						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Entrar
							</button>
						</div>
					</form>

					{/* Link para Registro */}
					<p className='mt-10 text-center text-sm/6 text-gray-500'>
						Não possui uma conta?{' '}
						<a
							href='#'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Registre-se
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
