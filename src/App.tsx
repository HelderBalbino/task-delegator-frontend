import { LuClipboardList } from 'react-icons/lu';

function App() {
	return (
		<>
			<div className='flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='border-0 shadow-2xl shadow-gray-600 rounded-3xl p-4 sm:mx-auto sm:w-full sm:max-w-sm'>
					<div className='flex flex-col align-center justify-center'>
						<div className='flex align-center justify-center'>
							<LuClipboardList size={50} />
						</div>
						<h1 className='text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
							Task Delegator
						</h1>
					</div>

					<h2 className='mt-2 text-center text-sm/6 text-gray-600'>
						Input your credentials to login
					</h2>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						<form action='#' method='POST' className='space-y-6'>
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
										required
										autoComplete='email'
										placeholder='Please enter your email'
										className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
									/>
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between'>
									<label
										htmlFor='password'
										className='block text-sm/6 font-medium text-gray-900'
									>
										Password
									</label>
									<div className='text-sm'>
										<a
											href='#'
											className='font-semibold text-indigo-600 hover:text-indigo-500'
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
										required
										autoComplete='current-password'
										className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
									/>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								>
									Sign in
								</button>
							</div>
						</form>
						<p className='mt-10 text-center text-sm/6 text-gray-500'>
							Don't have an account{' '}
							<a
								href='#'
								className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
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
