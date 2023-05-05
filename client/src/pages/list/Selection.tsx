import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const style = {
	selection: `mt-[4rem] md:ml-[24vw] pt-[2rem]`,
	dropdown: `hidden md:inline-block relative group`,
	dropdown__mobile: `inline-block md:hidden relative group`,
	btn: `bg-[#499e79] cursor-pointer px-[1rem] py-[.6rem] md:px-[2rem] md:py-[1.4rem] text-2xl font-bold text-white active:scale-95 transition transform duration-100 ease-in`,
	dropdown__content: `hidden md:group-hover:block absolute bg-[#f1f1f1] min-w-[100px] md:min-w-[128px] shadow-lg`,
	dropdown__links: `block pl-[1rem] md:pl-[2rem] hover:bg-[#ddd]`,
};

function DesktopSelection() {
	return (
		<>
			<div className={style.dropdown}>
				<button className={`${style.btn} rounded-l-lg`}>Types</button>
				<div className={`${style.dropdown__content}`}>
					<Link
						href="/list/coconut"
						className={style.dropdown__links}>
						coconut
					</Link>
					<Link
						href="/list/fruits"
						className={style.dropdown__links}>
						fruits
					</Link>
					<Link
						href="/list/creamer"
						className={style.dropdown__links}>
						creamer
					</Link>
				</div>
			</div>
			<div className={style.dropdown}>
				<button className={`${style.btn}`}>Bin</button>
				<div className={`${style.dropdown__content}`}>
					<Link
						href="/list/A1"
						className={style.dropdown__links}>
						A1
					</Link>
					<Link
						href="/list/A2"
						className={style.dropdown__links}>
						A2
					</Link>
					<Link
						href="/list/A3"
						className={style.dropdown__links}>
						A3
					</Link>
					<Link
						href="/list/A4"
						className={style.dropdown__links}>
						A4
					</Link>
					<Link
						href="/list/A5"
						className={style.dropdown__links}>
						A5
					</Link>
					<Link
						href="/list/A6"
						className={style.dropdown__links}>
						A6
					</Link>
				</div>
			</div>
			<Link
				href="/list/all"
				className={`${style.dropdown} ${style.btn} rounded-r-lg`}>
				View All
			</Link>
		</>
	);
}

function MobileSelection() {
	const [isActiveType, setIsActiveType] = useState(false);
	const clickType = () => {
		if (isActiveType) {
			setIsActiveType(false);
		} else {
			setIsActiveType(true);
		}
	};

	const [isActiveBin, setIsActiveBin] = useState(false);
	const clickBin = () => {
		if (isActiveBin) {
			setIsActiveBin(false);
		} else {
			setIsActiveBin(true);
		}
	};

	const clickAll = () => {
		if (isActiveType) {
			setIsActiveType(false);
		}
		if (isActiveBin) {
			setIsActiveBin(false);
		}
	};
	return (
		<>
			<div className={style.dropdown__mobile}>
				<button
					className={`${style.btn} rounded-l-lg`}
					onClick={clickType}>
					Types
				</button>
				<div
					className={`${style.dropdown__content} ${
						isActiveType ? '!block' : '!hidden'
					}`}>
					<Link
						href="/list/coconut"
						className={style.dropdown__links}
						onClick={clickType}>
						coconut
					</Link>
					<Link
						href="/list/fruits"
						className={style.dropdown__links}
						onClick={clickType}>
						fruits
					</Link>
					<Link
						href="/list/creamer"
						className={style.dropdown__links}
						onClick={clickType}>
						creamer
					</Link>
				</div>
			</div>
			<div className={style.dropdown__mobile}>
				<button
					className={`${style.btn}`}
					onClick={clickBin}>
					Bin
				</button>
				<div
					className={`${style.dropdown__content} ${
						isActiveBin ? '!block' : '!hidden'
					}`}>
					<Link
						href="/list/A1"
						className={style.dropdown__links}
						onClick={clickBin}>
						A1
					</Link>
					<Link
						href="/list/A2"
						className={style.dropdown__links}
						onClick={clickBin}>
						A2
					</Link>
					<Link
						href="/list/A3"
						className={style.dropdown__links}
						onClick={clickBin}>
						A3
					</Link>
					<Link
						href="/list/A4"
						className={style.dropdown__links}
						onClick={clickBin}>
						A4
					</Link>
					<Link
						href="/list/A5"
						className={style.dropdown__links}
						onClick={clickBin}>
						A5
					</Link>
					<Link
						href="/list/A6"
						className={style.dropdown__links}
						onClick={clickBin}>
						A6
					</Link>
				</div>
			</div>
			<Link
				href="/list/all"
				className={`${style.dropdown__mobile} ${style.btn} rounded-r-lg`}
				onClick={clickAll}>
				View All
			</Link>
		</>
	);
}

function Selection() {
	return (
		<section
			id="selection"
			className={style.selection}>
			<DesktopSelection />
			<MobileSelection />
		</section>
	);
}

export default Selection;
