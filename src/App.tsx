import { LuClipboardList } from 'react-icons/lu';

function App() {
	return (
		<>
			<div
				className='relative flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-center'
				style={{
					backgroundImage:
						"url('https://your-image-link.com/your-background.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Dark Blur Overlay */}
				<div className='absolute inset-0 bg-black/30 backdrop-blur-md'></div>

				{/* Form Container */}
				<div className='relative z-10 border-0 shadow-2xl shadow-black rounded-3xl p-8 sm:mx-auto sm:w-full sm:max-w-sm bg-black/40 backdrop-blur-md'>
					<div className='flex flex-col items-center justify-center'>
						<LuClipboardList size={50} className='text-white' />
						<h1 className='text-center text-2xl leading-9 font-bold tracking-tight text-white mt-2'>
							Task Delegator
						</h1>
					</div>

					<h2 className='mt-2 text-center text-sm leading-6 text-gray-300'>
						Input your credentials to login
					</h2>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						<form action='#' method='POST' className='space-y-6'>
							<div>
								<label
									htmlFor='email'
									className='block text-sm leading-6 font-medium text-gray-300'
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
										placeholder='Please enter your email'
										className='block w-full rounded-md bg-white/20 px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 sm:text-sm'
									/>
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between'>
									<label
										htmlFor='password'
										className='block text-sm leading-6 font-medium text-gray-300'
									>
										Password
									</label>
									<div className='text-sm'>
										<a
											href='#'
											className='font-semibold text-indigo-400 hover:text-indigo-300'
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
										placeholder='Please enter your password'
										className='block w-full rounded-md bg-white/20 px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 sm:text-sm'
									/>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								>
									Sign in
								</button>
							</div>
						</form>

						<p className='mt-10 text-center text-sm leading-6 text-gray-400'>
							Don't have an account?{' '}
							<a
								href='#'
								className='font-semibold text-indigo-400 hover:text-indigo-300'
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
