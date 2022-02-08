interface Props {
	children: React.ReactNode
}

const Section = ({ children }: Props) => (
	<section className='flex-grow-1 h-full'>{children}</section>
)

export default Section
