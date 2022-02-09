interface Props {
	children: React.ReactNode
}

const Section = ({ children }: Props) => (
	<section className='flex-grow-1 h-full pb-16 md:pb-0'>{children}</section>
)

export default Section
