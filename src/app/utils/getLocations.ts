export async function getLocations(page: number = 1) {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/location/?page=${page}`
		);

		if (!response.ok) {
			throw new Error(`Error fetching locations. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error: any) {
		console.error("Error in getLocations:", error.message);
	}
}

export async function getLocation(id: number) {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/location/${id}`
		);

		if (!response.ok) {
			throw new Error(`Error fetching locations. Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		console.error("Error in getLocations:", error.message);
	}
}
