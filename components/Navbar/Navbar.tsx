import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ConnectWallet from '../ConnectWallet/ConnectWallet'

type LinksType = {
	title: string
	link: string
}

const NavLinks: LinksType[] = [
	{ title: 'Home', link: '/' },
	{ title: 'Scholarship Pools', link: '/scholarship-pool' },
	// { title: "Teacher's Portal", link: '/teacher-portal' },
	{ title: 'Scholar’s Progress', link: '/progress' },
	{ title: 'DirectEd Lions', link: '/donors-portal' },
]

const Navbar = () => {
	const [open, setOpen] = React.useState<boolean>(false)

	const router = useRouter()

	return (
		<>
			<nav className='nav'>
				<div className='nav__items flex-between'>
					<Link href='https://directed.dev/'>
						<div className='nav__logo-box'>
							<Image
								id='logo'
								src='/static/images/logo-7B9374.png'
								width={60}
								height={60}
								alt='Direct Ed Logo'
							/>
							<div className='nav__logo-text'>
								<p>DirectEd Development</p>
								<p>Foundation</p>
							</div>
						</div>
					</Link>

					<ul className='nav__list-items'>
						{NavLinks.map((link: LinksType, index: number) => (
							<Link href={link.link} passHref key={index}>
								<li
									className={` ${
										router.pathname === link.link ? 'active' : ''
									}`}
								>
									{link.title}
								</li>
							</Link>
						))}
					</ul>
					<div className='nav__wallet'>
						<ConnectWallet />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
