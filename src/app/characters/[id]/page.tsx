import Link from "next/link";
import {getCharacter} from "@/app/utils";

export default async function CharacterDetails({params}: any) {
	const data = await getCharacter(params.id);
	return (
		<div className="grid place-items-center mt-8">
			<div className="grid-cols-2 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<img
					className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800 mx-auto mt-2"
					src={data.image}
					alt={data.name}
					width={250}
				/>
				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{data.name}
					</h5>
					<span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
						{data.gender}
					</span>
					<span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
						{data.species}
					</span>
					<p className="my-2 font-normal text-gray-700 dark:text-gray-400">
						Origin:{" "}
						<span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
							{data.origin.name}
						</span>
					</p>

					<p className="my-2 font-normal text-gray-700 dark:text-gray-400">
						Episodes:{" "}
						<Link
							href="/episodes"
							className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
						>
							{data.episode.length}
						</Link>
					</p>

					<Link
						href="/"
						className="inline-flex items-center px-3 py-2 -mb-4 text-sm font-medium text-center text-white bg-green-900 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						All Characters
						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
