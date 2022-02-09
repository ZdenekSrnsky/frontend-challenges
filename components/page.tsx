import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Frontend Challenge | {title}</title>
			</Head>
		) : null}

		<Appbar />

		<main className='mx-auto flex h-screen w-full flex-col pt-10 px-safe'>
			{children}
		</main>

		<BottomNav />
	</>
)

export default Page
