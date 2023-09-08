import { ONE_MINUTE } from '../constants/constants';

export default class CacheIllnessRepository {
	async set(cacheName: string, url: string, illnessList: any) {
		const EXPIRATION_TIME = new Date(Date.now() + ONE_MINUTE);
		const cacheStorage = await caches.open(cacheName);
		const init = {
			headers: {
				'Content-Type': 'application/json, application/json; charset=utf-8',
				'content-length': '2',
				Expires: `${EXPIRATION_TIME}`,
			},
		};
		const clonedResponse = new Response(JSON.stringify(illnessList), init);
		await cacheStorage.put(url, clonedResponse);
		return;
	}

	async get(cacheName: string, url: string) {
		try {
			const cacheStorage = await caches.open(cacheName);
			const cachedResponse = await cacheStorage.match(url);

			if (cachedResponse === undefined) {
				return false;
			}

			return await cachedResponse.json();
		} catch (error) {
			return false;
		}
	}

	async remove() {
		const cacheNames = await caches.keys();
		const currentTime = new Date(Date.now()).getTime();
		for (const cacheName of cacheNames) {
			const cacheStorage = await caches.open(cacheName);
			const cachedResponse = await cacheStorage.match(cacheName);
			const cacheExpirationTime = new Date(cachedResponse?.headers.get('Expires') ?? '').getTime();

			if (cacheExpirationTime < currentTime) {
				await cacheStorage.delete(cacheName);
				console.info(`"${cacheName}" 만료되어 삭제되었습니다.`);
			}
		}
	}
}
