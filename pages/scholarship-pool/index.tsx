import type { NextPage } from 'next'
import { Meta, DonorInfoTab, ScholarsCard, Layout, Timer } from '../../components'
import Image from 'next/image';
import { Button }  from '../../components';
import { useEffect, useState } from 'react'
import PopupModal from '../../components/PopupModal/PopupModal'

interface TransactionCount {
	tx_hash: string
}

const ScholarshipPool: NextPage = () => {

	const [isOpen, setIsOpen] = useState<boolean>(true);

	const closeModal = () => {
		setIsOpen(false);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleReopenModal = () => {
		setIsModalOpen(true);
	};
	const [wallet1, setWallet1] = useState<TransactionCount[]>([]);
	const [wallet2, setWallet2] = useState<TransactionCount[]>([]);

	// Fetch number of transactions in a wallet address
	useEffect(() => {
		fetch(
			'https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1xyvc346z883y6x5a07f602kywnalnnpvljqfearrrgxjl4jmj6um7hskwglsnmdgdftmnh69n6f47vnp3njwpnj8anqqzvx2fl/transactions?count=100&order=desc',
			{
				headers: {
					project_id: 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setWallet1(data)
			})

		fetch(
			'https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va/transactions?count=100&order=desc',
			{
				headers: {
					project_id: 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setWallet2(data)
			})
	}, [])


	return (
		<Layout>

			<PopupModal isOpen={isModalOpen} closeModal={handleCloseModal} handleReopenModal={handleReopenModal} />
			{isModalOpen && (
				<Button onClick={handleReopenModal}></Button>
			)}
			 <Meta title='Scholarship Pools' description='Scholarship Pools Page' />

			<main className='scholarship-pool'>


				<div className="scholarship-pool__header-text"><h2>DirectEd Lions Scholarship Crowdfunding </h2></div>


				<section className='scholarship-pool__title'>
					<h4>How We Show Appreciation To Our Supporters</h4>
					<button className='OpenButton' onClick={handleOpenModal}><img src="/static/images/question_mark.png" alt="open modal icon" /></button>
				</section>
				<DonorInfoTab />


				<section className='scholarship-pool__potrait-section'>
					<h3>Access Scholarship Crowdfunding Pools</h3>
					<h5>
						Press the 'Donate now' button of the pool you want to
						contribute to and see the DirectEd Lions minting tier options
					</h5>
					<div 
					className='scholarship-pool__potrait-cards'
					>
						<ScholarsCard
							donated={wallet2.length}
							funded='2'
							fundsLeft='14'
							schoolName='General Pool'
							amount='7000$'
							schoolAlias='DirectEd General Pool'
							infoLink='https://directed.notion.site/DirectEd-s-Scholars-of-the-Nile-General-Pool-00d4076e859d4fb699e30e842b5901d2?pvs=4'
							image='/static/images/generalpool.jpg'
							donateLink='/generalpool'
							stakeAdd='stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv'
							nftsleft='10'
						/>
						<ScholarsCard
							donated={wallet2.length}
							funded='1'
							fundsLeft='10'
							schoolName="Boys Pool"
							amount='5000$'
							schoolAlias="DirecEd Boys Pool"
							infoLink='https://directed.notion.site/DirectEd-s-EmpowerHim-Boys-only-funding-pool-eab27b1341b04da0b0e330e0e999be07?pvs=4'
							image='/static/images/boyspool.jpg'
							donateLink='/boyspool'
							stakeAdd='stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv'
							nftsleft='10'
						/>
						<ScholarsCard
							donated={wallet1.length}
							funded='1'
							fundsLeft='4'
							schoolName="Girls Pool"
							amount='2000$'
							schoolAlias="DirectEd Girls Pool"
							infoLink='https://directed.notion.site/DirectEd-s-EmpowerHer-Girls-only-funding-pool-fa956750d38d4e98b58655a15f2e2c9e?pvs=4'
							image='/static/images/girlspool.jpg'
							donateLink='/girlspool'
							stakeAdd='stake179dedwdltct8y0cfak5x54aemazeay6lxfscee8qeer7esqfswem9'
							nftsleft='10'
						/>
					</div>
				</section>
				<section className='home__brands'>
					<h3>Partners</h3>
					<div className='flex-gap-two'>
						<Image
							src='/static/images/coti-white.png'
							alt='coti'
							width={150}
							height={50}
						/>
						<Image
							src='/static/images/snapbrillia.png'
							alt='snapbrillia'
							width={150}
							height={65}
						/>
						<Image
							src='/static/images/web3ug.png'
							alt='web3ug'
							width={80}
							height={80}
						/>
						<Image
							src='/static/images/cardano-warriors.png'
							alt='web3ug'
							width={100}
							height={80}
						/>
					</div>

				</section>

			</main> 
		</Layout>
	)
}

export default ScholarshipPool


				{/* <FilterMenu />
				<section className='scholarship-pool__landscape-card'>
					{schoolData.map((school: SchoolDataType) => (
						<PoolCard key={school.title} {...school} />
					))}
				</section> */}
