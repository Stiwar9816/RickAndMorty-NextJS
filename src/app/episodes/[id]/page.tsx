import Link from "next/link";
import {getEpisode} from "@/app/utils";

export default async function EpisodesDetails({params}: any) {
	const data = await getEpisode(params.id);
	return (
		<>
			<div className="grid  place-items-center mt-10">
				<div className="w-1/3 gap-4 p-6 ju bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<div>
						<dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
							<div className="flex flex-col pb-3">
								<dt className=" flex text-gray-500 md:text-lg dark:text-gray-400">
									Episode:{" "}
									<h5 className="mb-2 mx-3 justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										{data.name}
									</h5>
								</dt>
							</div>
						</dl>
					</div>

					<div>
						<dl className="flex gap-16 max-w-md text-gray-900  dark:text-white dark:divide-gray-700">
							<div className="flex flex-col py-3">
								<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
									Episode
								</dt>
								<dd className="text-lg font-semibold">{data.episode}</dd>
							</div>
							<div className="flex flex-col py-3">
								<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
									Air Date
								</dt>
								<dd className="text-lg font-semibold">{data.air_date}</dd>
							</div>
							<div className="flex flex-col pt-3">
								<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
									Characters
								</dt>
								<dd className="text-lg font-semibold">
									{data.characters.length}
								</dd>
							</div>
						</dl>
					</div>
					<Link
						href="/episodes"
						className="inline-flex items-center px-3 py-2 my-3 text-sm font-medium text-center text-white bg-green-900 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						All Episodes
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
		</>
	);
}
