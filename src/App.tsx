import { LuClipboardList } from 'react-icons/lu';

function App() {
	return (
		<>
			<div
				className='relative flex min-h-screen flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 bg-cover bg-center'
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Blurred Color Overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-800/40 to-blue-800/50 backdrop-blur-md'></div>

				{/* Form Container */}
				<div className='relative z-10 border-0 shadow-2xl shadow-indigo-800 rounded-3xl p-8 sm:mx-auto sm:w-full sm:max-w-md bg-black backdrop-blur-lg'>
					<div className='flex flex-col items-center justify-center'>
						<LuClipboardList
							size={50}
							className='text-indigo-300'
						/>
						<h1 className='text-center text-3xl font-extrabold tracking-tight text-indigo-100 mt-4'>
							Task Delegator
						</h1>
					</div>

					<h2 className='mt-4 text-center text-md text-indigo-200'>
						Input your credentials to login
					</h2>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						<form action='#' method='POST' className='space-y-6'>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-indigo-200'
								>
									Email
								</label>
								<div className='mt-2'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										required
										placeholder='Enter your email'
										className='block w-full rounded-md bg-white/20 px-3 py-2 text-base text-white placeholder:text-indigo-300 focus:outline-2 focus:outline-indigo-400 sm:text-sm'
									/>
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between'>
									<label
										htmlFor='password'
										className='block text-sm font-medium text-indigo-200'
									>
										Password
									</label>
									<div className='text-sm'>
										<a
											href='#'
											className='font-semibold text-indigo-300 hover:text-indigo-200'
										>
											Forgot password?
										</a>
									</div>
								</div>
								<div className='mt-2'>
									<input
										id='password'
										name='password'
										type='password'
										autoComplete='current-password'
										required
										placeholder='Enter your password'
										className='block w-full rounded-md bg-white/20 px-3 py-2 text-base text-white placeholder:text-indigo-300 focus:outline-2 focus:outline-indigo-400 sm:text-sm'
									/>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-bold text-white shadow-md hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition'
								>
									Sign in
								</button>
							</div>
						</form>

						<p className='mt-8 text-center text-sm text-indigo-300'>
							Don't have an account?{' '}
							<a
								href='#'
								className='font-semibold text-indigo-200 hover:text-indigo-100'
							>
								Sign up
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
