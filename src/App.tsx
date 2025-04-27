import { LuClipboardList } from 'react-icons/lu';
import { motion } from 'framer-motion';

function App() {
	return (
		<>
			<div
				className='relative flex min-h-screen flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 bg-cover bg-center'
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1581090700227-1acdc66c058e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Blurred Overlay */}
				<div className='absolute inset-0 bg-black/50 backdrop-blur-md'></div>

				{/* Animated Form Container */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='relative z-10 border border-gray-700 shadow-2xl shadow-black/60 rounded-3xl p-8 sm:mx-auto sm:w-full sm:max-w-md bg-black/60 backdrop-blur-lg'
				>
					<div className='flex flex-col items-center justify-center'>
						<LuClipboardList size={50} className='text-blue-400' />
						<h1 className='text-center text-3xl font-bold tracking-tight text-white mt-4'>
							Task Delegator
						</h1>
					</div>

					<h2 className='mt-4 text-center text-md text-gray-300'>
						Welcome back, please sign in
					</h2>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
						<form action='#' method='POST' className='space-y-6'>
							{/* Email Input */}
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-300'
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
										placeholder='you@example.com'
										className='block w-full rounded-md bg-white/10 px-3 py-2 text-base text-white placeholder:text-gray-400 focus:outline-2 focus:outline-blue-400 sm:text-sm'
									/>
								</div>
							</div>

							{/* Password Input */}
							<div>
								<div className='flex items-center justify-between'>
									<label
										htmlFor='password'
										className='block text-sm font-medium text-gray-300'
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
										className='block w-full rounded-md bg-white/10 px-3 py-2 text-base text-white placeholder:text-gray-400 focus:outline-2 focus:outline-blue-400 sm:text-sm'
									/>
								</div>
							</div>

							{/* Submit Button */}
							<div>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-bold text-white shadow-md hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition'
								>
									Sign in
								</button>
							</div>
						</form>

						{/* Sign Up Link */}
						<p className='mt-8 text-center text-sm text-gray-400'>
							Don't have an account?{' '}
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
