export type CharactersActionType =
	// fetching
	| {type: "FETCH_START"}
	| {type: "FETCH_SUCCESS"; payload: any[]}
	| {type: "FETCH_ERROR"; payload: any}
	// filters
	| {type: "SEARCH_INPUT"; payload: string}
	| {type: "FILTER_DATA"; payload: string}
	| {type: "CLEAN_FILTERS"}
	// pagination
	| {type: "NEXT_PAGE"}
	| {type: "PREV_PAGE"}
	| {type: "PICKED_PAGE"; payload: number}
	| {type: "TOTAL_PAGE"; payload: number};
