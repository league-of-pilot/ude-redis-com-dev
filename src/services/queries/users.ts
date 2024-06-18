import { userKey } from '$services/keys';
import { client } from '$services/redis';
import type { TCreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';

export const getUserByUsername = async (username: string) => {};

export const getUserById = async (id: string) => {
	const userRaw = await client.hGetAll(userKey(id));
	return deserializeUser(id, userRaw);
};

export const createUser = async (attrs: TCreateUserAttrs) => {
	const id = genId();
	await client.hSet(userKey(id), attrs);
};

const deserializeUser = (id: string, user: Record<string, string>) => {
	return {
		id,
		...user
	};
};
