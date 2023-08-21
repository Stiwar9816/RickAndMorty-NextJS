"use client";
import {useContext, useEffect} from "react";
import {UIContext} from "../context/ui/UIContext";
import {getEpisodes} from "../utils";
import {
	CardEpisodes,
	FilterDropdown,
	Loading,
	NotResults,
	Pagination,
	SearchInput,
} from "../components";
import {PAGE} from "../helpers";

export default function EpisodesPage() {
	const {
		data,
		dataFiltered,
		currentPage,
		dispatch,
		searchInput,
		loading,
		error,
	} = useContext(UIContext);

	useEffect(() => {
		dispatch({type: "FETCH_START"});
		dispatch({type: "CLEAN_FILTERS"});

		getEpisodes(currentPage)
			.then((res) => {
				dispatch({
					type: "FETCH_SUCCESS",
					payload: res.results,
				});
				dispatch({
					type: "TOTAL_PAGE",
					payload: res.info.pages,
				});
			})
			.catch((error) => {
				dispatch({
					type: "FETCH_ERROR",
					payload: error,
				});
			});
	}, [currentPage]);

	if (loading) return <Loading />;

	if (error) return <p>Error: {error}</p>;

	const isFilterEmpty = searchInput === "" && dataFiltered.length === 0;

	return (
		<>
			<div className="flex min-h-screen flex-col items-center p-5">
				<h1 className="font-bold font-mono text-5xl text-center my-5 text-gray-900 dark:text-white">
					Episodes
				</h1>
				<div className="flex max-w-full gap-6 my-2">
					<SearchInput />
					<FilterDropdown pageCategory={PAGE.EPISODES} />
				</div>
				<div className="flex flex-grow items-center justify-center">
					{isFilterEmpty ? (
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
							<CardEpisodes episodes={data} />
						</div>
					) : dataFiltered.length === 0 ? (
						<NotResults />
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
							<CardEpisodes episodes={dataFiltered} />
						</div>
					)}
				</div>

				<Pagination />
			</div>
		</>
	);
}
