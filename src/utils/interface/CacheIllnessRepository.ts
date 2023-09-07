export default class CacheIllnessRepository {
	async set(cacheName: string, url: string, illnessList: any) {
		const cacheStorage = await caches.open(cacheName);
		const init = {
			headers: {
				'Content-Type': 'application/json, application/json; charset=utf-8',
				'content-length': '2',
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

	async removeAll() {
		const cacheNames = await caches.keys();
		await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));

		console.info('모든 캐시가 삭제되었습니다.');
	}
}
