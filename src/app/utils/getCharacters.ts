export async function getCharacters(page: number = 1) {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character/?page=${page}`
		);

		if (!response.ok) {
			throw new Error(`Error fetching characters. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error: any) {
		console.error("Error in getCharacters:", error.message);
	}
}

export async function getCharacter(id: number) {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character/${id}`
		);

		if (!response.ok) {
			throw new Error(
				`Error fetching character ${id}. Status: ${response.status}`
			);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		console.error(`Error in getCharacter(${id}):`, error.message);
	}
}
