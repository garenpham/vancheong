import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/utils/client';
import { selectProducts } from '@/utils/queries';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		const { query } = req.query;
		const products = await client.fetch(selectProducts(query));
		res.status(200).json(products);
	}
}
