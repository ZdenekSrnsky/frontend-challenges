import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [{ label: 'All Challenges', href: '/' }]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe'>
				<div className='mx-auto flex h-20 w-full items-center justify-between px-6'>
					<h1 className='font-medium'>Frontend Challenges</h1>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-emerald-600'
													: 'text-zinc-600 hover:text-zinc-900'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
