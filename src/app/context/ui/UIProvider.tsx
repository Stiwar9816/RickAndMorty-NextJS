import {useReducer, useEffect} from "react";

import {uiReducer} from "./uiReducer";
import {UIContext} from "./UIContext";
import {UIState} from "@/app/interfaces";

const INITIAL_STATE: UIState = {
	data: [],
	dataFiltered: [],
	loading: false,
	error: null,
	searchInput: "",
	currentPage: 1,
	totalPages: 1,
};

export const UIProvider = ({children}: any) => {
	const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

	const handlePrevPage = () => dispatch({type: "PREV_PAGE"});

	const handleNextPage = () => dispatch({type: "NEXT_PAGE"});

	const handlePickedPage = (page: number) =>
		dispatch({type: "PICKED_PAGE", payload: page});

	const handleOnPageChange = (page: number) => {
		dispatch({type: "TOTAL_PAGE", payload: page});
	};

	const handleFilter = (queryParam: any) => {
		console.log("handleFilter query", queryParam);
		console.log("state searchInput", state.searchInput);
		dispatch({type: "FILTER_DATA", payload: queryParam});
	};

	useEffect(() => {
		handleFilter({
			querySearchInput: state.searchInput,
		});
	}, [state.searchInput]);

	return (
		<UIContext.Provider
			value={{
				...state,
				dispatch,
				handlePrevPage,
				handleNextPage,
				handleOnPageChange,
				handlePickedPage,
				handleFilter,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
