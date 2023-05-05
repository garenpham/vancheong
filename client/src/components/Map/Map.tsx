import React from 'react';
import Link from 'next/link';
import ShelfA from '../Shelves/ShelfA';

const style = {
	wrapper: `h-screen mt-[5rem] md:mt-0 pt-[1.4rem] md:pt-[2rem] flex flex-col`,
	title: `text-center text-3xl md:text-6xl font-bold text-[#499e79]`,
	btn: `pt-[3%] w-[120px] md:w-[180px] mx-auto cursor-pointer active:scale-95 transition transform duration-100 ease-in`,
	btnText: `bg-[#499e79] py-[20px] text-center text-xl md:text-2xl font-bold text-white rounded-full`,
};

function Map() {
	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Products Management</h1>
			<ShelfA />
			<Link
				href="/list/all"
				className={style.btn}>
				<p className={style.btnText}>View All</p>
			</Link>
		</div>
	);
}

export default Map;
