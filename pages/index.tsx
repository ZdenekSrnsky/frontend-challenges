import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'
import avatarImage from '../public/images/image-avatar.png'
import nftImage from '../public/images/image-equilibrium.jpg'
import clockIcon from '../public/icons/icon-clock.svg'
import ethereumIcon from '../public/icons/icon-ethereum.svg'
import viewIcon from '../public/icons/icon-view.svg'

const NftPreviewCard = () => (
	<Page title='NFT Component'>
		<Section>
			<div className='flex h-full w-full items-center justify-center bg-nft-400 font-outfit'>
				<div className='drop-stransition-all w-min rounded-xl bg-nft-300 p-4 shadow-lg shadow-gray-900 drop-shadow-2xl hover:scale-105'>
					<div className='relative h-60 w-60 cursor-pointer rounded-lg'>
						<Image
							src={nftImage}
							alt='Equilibrium NFT'
							className='rounded-lg bg-black backdrop-blur-sm'
							objectFit='cover'
						/>
						<div className='opacity-0 hover:opacity-100'>
							<div className='absolute left-0 top-0 h-full w-full rounded-lg bg-cyan opacity-20'></div>
							<div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
								<Image
									src={viewIcon}
									alt='View'
									layout='fixed'
									objectFit='cover'
								/>
							</div>
						</div>
					</div>

					<h1 className='my-3 cursor-pointer font-bold text-white hover:text-cyan'>
						Equilibrium #3439
					</h1>

					<p className='my-3 text-sm font-light text-nft-100'>
						Our equilibrium collection promotes balance and calm.
					</p>

					<div className='my-4 flex justify-between'>
						<div className='flex items-center justify-center space-x-1'>
							<Image src={ethereumIcon} alt='Etherum' />
							<div className='text-sm font-semibold text-cyan'>0.041 ETH</div>
						</div>
						<div className='flex items-center justify-center space-x-1'>
							<Image src={clockIcon} alt='Clock' />
							<div className='text-sm font-light text-nft-100'>3 days left</div>
						</div>
					</div>

					<hr className='border-nft-200' />

					<div className='mt-4 mb-2 flex items-center  space-x-3'>
						<div className='relative h-7 w-7 rounded-full border border-white'>
							<Image src={avatarImage} alt='Avatar' />
						</div>
						<div className='flex items-center'>
							<span className='mr-1 text-xs font-light text-nft-100'>
								Creation of
							</span>
							<span className='cursor-pointer text-xs font-semibold text-white hover:text-cyan'>
								Jules Wyvern
							</span>
						</div>
					</div>
				</div>
			</div>
		</Section>
	</Page>
)

export default NftPreviewCard
