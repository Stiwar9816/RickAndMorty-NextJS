import {useContext, useEffect, useState} from "react";
import {UIContext} from "../context/ui/UIContext";
import {getCategories} from "../helpers/getCategories";
import {FilterDropdownProps} from "../interfaces";

export const FilterDropdown = ({pageCategory}: FilterDropdownProps) => {
	const {data, dispatch} = useContext(UIContext);
	const [categories, setCategories] = useState<string[]>([]);

	const handleCategory = (e: any) => {
		console.log(e.target.value);
		dispatch({
			type: "FILTER_DATA",
			payload: {querySelectCategory: e.target.value},
		});
	};

	useEffect(() => {
		getCategories(data, pageCategory).then((categories) => {
			setCategories(categories);
		});
	}, [data, pageCategory]);

	return (
		<>
			<select
				className="font-mono rounded dark:bg-gray-700"
				name="select"
				id="categories"
				onChange={handleCategory}
			>
				<option defaultValue="all">All</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</>
	);
};
