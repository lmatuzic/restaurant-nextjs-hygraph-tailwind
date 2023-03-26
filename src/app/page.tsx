// import apolloClient from './lib/apollo/graphql/apollo.config';
// import { TEST } from './lib/apollo/graphql/queries/test';
import Image from 'next/image';
import zkImage from '../../public/images/zk-1.jpeg';

// async function getQueryData() {
// 	const { data } = await apolloClient.query({
// 		query: TEST,
// 	});

// 	return data;
// }

export default async function Home() {
	// const testQueryData = await getQueryData();
	// console.log(testQueryData.demoModels);

	return (
		<main className='flex'>
			<h1 className='text-customOrange'>Mjesto gdje sva osjetila uživaju </h1>
			<Image src={zkImage} alt='zeleni kut home image' width={700} height={550} />

			{/* <div>
				{testQueryData.demoModels.map((item: any, index: number) => (
					<div key={index}>{item.title}</div>
				))}
			</div> */}
		</main>
	);
}
