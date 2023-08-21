export async function getEpisodes(page: number = 1) {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/episode/?page=${page}`
		);

		if (!response.ok) {
			throw new Error(`Error fetching episodes. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error: any) {
		console.error("Error in getEpisodes:", error.message);
	}
}

export async function getEpisode(id: number) {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/episode/${id}`
		);

		if (!response.ok) {
			throw new Error(`Error fetching episodes. Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		console.error("Error in getEpisodes:", error.message);
	}
}
