import React from 'react';
import Nav from '@/components/Nav/Nav';
import axios from 'axios';
import { BASE_URL } from '@/config/index';
import Selection from './Selection';
import Product from './Product';

const style = {
	wrapper: `px-[1rem] md:pl-0`,
	container: `md:ml-[24vw] pt-[2rem]`,
};

function list({ products }: any) {
	return (
		<>
			<section id="nav">
				<Nav />
			</section>
			<div className={style.wrapper}>
				<Selection />
				<section
					id="products"
					className={style.container}>
					{products.map((product: any) => (
						<Product
							name={product.name}
							type={product.type}
							bin={product.bin}
							imgUrl={product.image.asset.url}
							key={product._id}
						/>
					))}
				</section>
			</div>
		</>
	);
}

export async function getServerSideProps({
	query: { query },
}: {
	query: { query: string };
}) {
	let res = null;
	if (query == 'all') {
		res = await axios.get(`${BASE_URL}/api/fetch-all`);
	} else {
		res = await axios.get(`${BASE_URL}/api/select/${query}`);
	}

	return {
		props: {
			products: res.data,
		},
	};
}

export default list;
