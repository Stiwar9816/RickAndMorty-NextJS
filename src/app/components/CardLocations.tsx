import React from "react";
import {Locations} from "../types";
import {CardLocationsProps} from "../interfaces";
import Link from "next/link";

/* Esctructura de las tarjetas */
const Card: React.FC<Locations> = ({id, name, type}) => (
	<Link
		href={`/locations/${id}`}
		className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
	>
		<h5 className="mb-2 text-2xl font-extrabold font-mono tracking-tight text-gray-900 dark:text-white dark:hover:text-green-500">
			{name}
		</h5>
		<p className="font-semibold text-gray-700 dark:text-gray-400">
			Type: {type}
		</p>
	</Link>
);

export const CardLocations: React.FC<CardLocationsProps> = ({locations}) => {
	return (
		<>
			{locations.map((location: Locations, index: number) => (
				<Card key={index} {...location} />
			))}
		</>
	);
};
