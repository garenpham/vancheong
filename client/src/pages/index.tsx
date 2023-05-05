import Head from 'next/head';
import axios from 'axios';
import Nav from '@/components/Nav/Nav';
import Map from '@/components/Map/Map';
import { BASE_URL } from '@/config/index';

const style = {
	section: `md:ml-[20vw]`,
};

function Home() {
	return (
		<>
			<Head>
				<title>Van Cheong Inventory App</title>
				<meta
					property="og:image"
					content="/static/logo.png"
				/>
				<meta
					name="description"
					content="Author: Tan Minh Pham"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<section id="nav">
				<Nav />
			</section>

			<section
				id="map"
				className={style.section}>
				<Map />
			</section>
		</>
	);
}

export default Home;
