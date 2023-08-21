import {createContext} from "react";

interface ContextProps {
	data: any[];
	dataFiltered: any[];
	loading: boolean;
	error: null;
	searchInput: string;
	currentPage: number;
	totalPages: number;
	// methods
	dispatch: any;
	handlePrevPage: () => void;
	handleNextPage: () => void;
	handlePickedPage: (page: number) => void;

	handleOnPageChange: (page: number) => void;
	handleFilter: (queryParam: any) => void;
}

export const UIContext = createContext({} as ContextProps);
