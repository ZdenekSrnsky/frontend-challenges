import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href}>
							<a
								className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
									router.pathname === href
										? 'text-emerald-600 dark:text-indigo-400'
										: 'text-zinc-600 hover:text-zinc-900'
								}`}
							>
								{icon}
								<span className='text-xs text-zinc-600 dark:text-zinc-400'>
									{label}
								</span>
							</a>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'All Challenges',
		href: '/',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path d='M12 14l9-5-9-5-9 5 9 5z' />
				<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1'
					d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
				/>
			</svg>
		),
	},
]
