import {UIState} from "@/app/interfaces";
import {getDataFiltered} from "@/app/helpers";
import {CharactersActionType} from "@/app/types";

export const uiReducer = (
	state: UIState,
	action: CharactersActionType
): UIState => {
	switch (action.type) {
		// fetching
		case "FETCH_START":
			return {...state, loading: true, error: null};
		case "FETCH_SUCCESS":
			return {...state, loading: false, data: action.payload};
		case "FETCH_ERROR":
			return {...state, loading: false, error: action.payload};
		// filters
		case "SEARCH_INPUT":
			return {...state, searchInput: action.payload};
		case "FILTER_DATA":
			const dataFiltered = getDataFiltered(state.data, action.payload);
			return {
				...state,
				dataFiltered,
			};
		case "CLEAN_FILTERS":
			return {
				...state,
				dataFiltered: [],
				searchInput: "",
			};
		// pagination
		case "NEXT_PAGE":
			return {...state, currentPage: state.currentPage + 1};
		case "PREV_PAGE":
			return {...state, currentPage: state.currentPage - 1};
		case "PICKED_PAGE":
			return {...state, currentPage: action.payload};
		case "TOTAL_PAGE":
			return {...state, totalPages: action.payload};
		default:
			return state;
	}
};
