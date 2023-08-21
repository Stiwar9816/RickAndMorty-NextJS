import React, {useContext} from "react";
import {UIContext} from "../context/ui/UIContext";

export const Pagination = () => {
	const {
		currentPage,
		totalPages,
		handleNextPage,
		handlePrevPage,
		handlePickedPage,
	} = useContext(UIContext);

	const renderPaginationButtons = () => {
		const minPage = Math.max(1, currentPage - 2);
		const maxPage = Math.min(totalPages, minPage + 4);

		const pageButtons = [];
		for (let page = minPage; page <= maxPage; page++) {
			const isActive = page === currentPage;
			const buttonClass = `flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
				isActive ? "bg-gray-700" : "bg-gray-900"
			}`;

			pageButtons.push(
				<button
					key={page}
					onClick={() => handlePickedPage(page)}
					className={buttonClass}
				>
					{page}
				</button>
			);
		}

		return pageButtons;
	};

	return (
		<div className="inline-flex items-center mt-2 xs:mt-0">
			<button
				className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				onClick={handlePrevPage}
				disabled={currentPage === 1}
			>
				Previous
			</button>
			{renderPaginationButtons()}
			<button
				className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};
