import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car2', {
		color: 'red',
		year: 1995
		// isUsed: true
	});

	const car = await client.hGetAll('car2');
	console.log(car);
};

run();
