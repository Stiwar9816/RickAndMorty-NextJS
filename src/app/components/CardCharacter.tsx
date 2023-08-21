import React from "react";
import {CardCharactersProps, CharacterStatusBadgeProps} from "../interfaces";
import {Character} from "../types";
import Link from "next/link";
import Image from "next/image";

const Card: React.FC<Character> = ({id, name, status, image}) => (
	<Link
		href={`/characters/${id}`}
		className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
	>
		<Image
			src={image}
			width={230}
			height={230}
			quality={100}
			className="rounded-lg mx-auto mt-1"
			alt="image-character"
		/>

		<div className="p-2">
			<h5 className="mb-1 text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
				{name}
			</h5>
			<CharacterStatusBadge status={status} />
		</div>
		<div></div>
	</Link>
);

/* Badge Status Characters condicionado: si es 'Alive' muestre el badge green y caso contrario red */
const CharacterStatusBadge: React.FC<CharacterStatusBadgeProps> = ({
	status,
}) => {
	const badgeClass =
		status === "Alive"
			? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
			: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
	return (
		<span
			className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${badgeClass}`}
		>
			{status}
		</span>
	);
};

export const CardCharacters: React.FC<CardCharactersProps> = ({characters}) => {
	return (
		<>
			{characters.map((character: Character, index: number) => (
				<Card key={index} {...character} />
			))}
		</>
	);
};
