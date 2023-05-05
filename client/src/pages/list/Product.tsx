import React from 'react';

const style = {
	wrapper: `text-md md:text-2xl`,
};

function Product({ name, type, bin, imgUrl }: any) {
	// console.log(`${name} ${type} ${bin} ${imgUrl}`);
	return (
		<div className={style.wrapper}>
			{name} __ Location: {bin}
		</div>
	);
}

export default Product;
