import React from 'react';
import Link from 'next/link';

const style = {
	wrapper: `md:h-[600px] md:w-[400px] bg-gray-400/20 rounded-2xl flex gap-[24px] flex-wrap justify-center mx-auto my-[1.4rem] md:mt-[4%] py-[1rem] md:py-0`,
	box: `h-[80px] w-[20px] md:h-[140px] md:w-[140px] bg-gray-400/50 flex-[0_1_40%] my-auto rounded-2xl`,
	bin: `font-bold text-3xl md:text-6xl text-center leading-[80px] md:leading-[140px] opacity-20 hover:opacity-100 cursor-pointer`,
};

function ShelfA() {
	return (
		<div className={style.wrapper}>
			<Link
				href="/list/A1"
				className={style.box}>
				<p className={style.bin}>A1</p>
			</Link>
			<Link
				href="/list/A2"
				className={style.box}>
				<p className={style.bin}>A2</p>
			</Link>
			<Link
				href="/list/A3"
				className={style.box}>
				<p className={style.bin}>A3</p>
			</Link>
			<Link
				href="/list/A4"
				className={style.box}>
				<p className={style.bin}>A4</p>
			</Link>
			<Link
				href="/list/A5"
				className={style.box}>
				<p className={style.bin}>A5</p>
			</Link>
			<Link
				href="/list/A6"
				className={style.box}>
				<p className={style.bin}>A6</p>
			</Link>
		</div>
	);
}

export default ShelfA;
