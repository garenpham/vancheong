import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function index() {
	const router = useRouter();
	useEffect(() => {
		router.push('/list/all');
	});

	return <></>;
}

export default index;
