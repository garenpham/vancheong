import Image from 'next/image';
import Link from 'next/link';
import { HiMail } from 'react-icons/hi';
import { useRouter } from 'next/router';
import en from './en';
import vi from './vi';
import { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { BsArrowRight } from 'react-icons/bs';

type Props = {};
const Nav = (props: Props) => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : vi;
	const changeLanguage = (e: any) => {
		const locale = e.target.value;
		router.push('/', '/', { locale });
	};
	const [isActive, setIsActive] = useState(false);

	const switchNav = () => {
		if (!isActive) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
		//console.log(isActive);
	};

	const style = {
		wrapper: `fixed top-0 bg-[#141414] z-20`,
		container: `hidden md:block md:relative h-[screen] w-screen md:w-[20vw]`,
		container__active: `animate-fade-in-right md:animate-none relative h-screen w-screen md:w-[20vw]`,
		nav__container: `sticky h-screen flex flex-col justify-between text-white`,
		nav__img: `opacity-[24%]`,
		nav__title: `pt-8 text-7xl text-center`,
		nav: `mt-[10vh] flex flex-col max-w-max gap-[2vh] text-center mx-auto pb-[10vh]`,
		nav__links: `group bg-black/40 py-4 px-14 md:bg-transparent md:p-0 rounded-full active:text-green-200`,
		nav__links__content: `text-lg md:text-4xl hover:opacity-80`,
		nav__links__underline: `hidden md:block mt-4 max-w-0 group-hover:max-w-full h-0.5 bg-green-200 transition-all duration-400`,
		logo: `mx-auto`,
		icon: `text-2xl mx-auto`,
		contact: `text-sm md:text-xl text-center mt-1 md:mt-4 pb-1 md:pb-8`,
		languages: `flex gap-2 justify-center`,
		languages__btn: `bg-black/40 hover:bg-gray-200/20 text-white rounded-full active:bg-gray-200/20 active:scale-95 transition transform duration-200 ease-in mb-2`,
		mobile: `animate-fade-in-left relative md:hidden text-white h-[5rem] w-screen flex`,
		mobile__inactive: `hidden`,
		mobile__imgWrapper: `h-0`,
		mobile__img: `opacity-[14%] object-cover object-top`,
		mobile__container: `flex items-center w-screen justify-between px-6 z-0`,
		mobile__title: `text-4xl flex`,
		mobile__menuBtn: `text-2xl`,
		mobile__menuClose: `block md:hidden mx-auto text-4xl`,
	};
	return (
		<nav className={style.wrapper}>
			<div className={`${isActive ? style.mobile__inactive : style.mobile}`}>
				<div className={style.mobile__imgWrapper}>
					<Image
						alt="navBackground"
						src="/static/wood.jpg"
						fill
						className={style.mobile__img}
					/>
				</div>

				<div className={style.mobile__container}>
					<Link href="/">
						<Image
							alt="navBackground"
							src="/static/logo.png"
							width={180}
							height={0}
							className={style.mobile__title}
						/>
					</Link>

					<SlMenu
						className={style.mobile__menuBtn}
						onClick={switchNav}
					/>
				</div>
			</div>
			<div
				className={`${!isActive ? style.container : style.container__active}`}>
				<Image
					alt="navBackground"
					src="/static/wood.jpg"
					fill
					className={style.nav__img}
				/>

				<div className={style.nav__container}>
					<Link
						href="/"
						onClick={switchNav}
						className={style.nav__title}>
						<Image
							alt="navBackground"
							src="/static/logo.png"
							width={340}
							height={0}
							className={style.logo}
						/>
					</Link>

					<nav className={style.nav}>
						<Link
							href="/"
							onClick={switchNav}
							className={style.nav__links}>
							<span className={style.nav__links__content}>{t.nav1}</span>
							<span className={style.nav__links__underline}></span>
						</Link>
						<Link
							href="#login"
							onClick={switchNav}
							className={style.nav__links}>
							<span className={style.nav__links__content}>{t.nav2}</span>
							<span className={style.nav__links__underline}></span>
						</Link>
						<Link
							href="/list/all"
							onClick={switchNav}
							className={style.nav__links}>
							<span className={style.nav__links__content}>{t.nav3}</span>
							<span className={style.nav__links__underline}></span>
						</Link>
						<BsArrowRight
							className={style.mobile__menuClose}
							onClick={switchNav}
						/>
					</nav>

					<div>
						<a href="mailto:info@vancheong.ca">
							<HiMail className={style.icon} />
						</a>
						<div className={style.contact}>
							<div> 8288 N Fraser Way #108</div>
							<div>Burnaby, BC V3N 0E9, Canada</div>
							<a href="tel:+16042440813">Tel: (+1) 604-244-0813</a>
						</div>
						<div className={style.languages}>
							<button
								value="en"
								onClick={changeLanguage}
								className={`${style.languages__btn} px-1`}>
								en
							</button>

							<button
								value="vi"
								onClick={changeLanguage}
								className={`${style.languages__btn} px-[0.34rem]`}>
								vi
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
