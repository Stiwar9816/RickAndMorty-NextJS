export const getDataFiltered = (data: any, query: any): any => {
	const { querySearchInput, querySelectCategory } = query;

	const validateElementFilter = (element: any) => {
		if (querySearchInput) return element.name.toLowerCase().includes(querySearchInput.toLowerCase());
		if (querySelectCategory) {
			if (element.species) return element.species.toLowerCase().includes(querySelectCategory.toLowerCase());
			if (element.type) return element.type.toLowerCase().includes(querySelectCategory.toLowerCase());
			if (element.episode) return element.episode.toLowerCase().includes(querySelectCategory.toLowerCase());
		}
	}
	return data.filter((element: any) => validateElementFilter(element));
};
