import { LuClipboardList } from 'react-icons/lu';
import { motion } from 'framer-motion';

function App() {
	return (
		<>
			<div
				className='relative flex min-h-screen flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 bg-cover bg-center'
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Stronger Blurred Overlay */}
				<div className='absolute inset-0 bg-black/70 backdrop-blur-lg'></div>

				{/* Animated Login Card */}
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					className='relative z-10 border border-gray-700 shadow-2xl shadow-black/70 rounded-3xl p-8 sm:mx-auto sm:w-full sm:max-w-md bg-black/60 backdrop-blur-2xl'
				>
					{/* Logo and Title */}
					<div className='flex flex-col items-center justify-center'>
						<div className='flex items-center space-x-3 mb-6'>
							<LuClipboardList
								size={40}
								className='text-blue-500'
							/>
							<span className='text-2xl font-bold text-white'>
								Task Delegator
							</span>
						</div>
					</div>

					<h2 className='text-center text-md text-gray-300 mb-8'>
						Welcome back, please sign in
					</h2>

					{/* Form */}
					<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
						<form action='#' method='POST' className='space-y-6'>
							{/* Email Input */}
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-200'
								>
									Email address
								</label>
								<div className='mt-2'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										required
										placeholder='you@company.com'
										className='block w-full rounded-md bg-white/10 px-3 py-2 text-base text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm'
									/>
								</div>
							</div>

							{/* Password Input */}
							<div>
								<div className='flex items-center justify-between'>
									<label
										htmlFor='password'
										className='block text-sm font-medium text-gray-200'
									>
										Password
									</label>
									<div className='text-sm'>
										<a
											href='#'
											className='font-semibold text-blue-400 hover:text-blue-300'
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
										placeholder='••••••••'
										className='block w-full rounded-md bg-white/10 px-3 py-2 text-base text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm'
									/>
								</div>
							</div>

							{/* Submit Button */}
							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-bold text-white shadow-lg hover:bg-blue-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300'
								>
									Sign in
								</button>
							</div>
						</form>

						{/* Footer */}
						<p className='mt-8 text-center text-sm text-gray-400'>
							Don’t have an account?{' '}
							<a
								href='#'
								className='font-semibold text-blue-400 hover:text-blue-300'
							>
								Sign up
							</a>
						</p>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default App;
