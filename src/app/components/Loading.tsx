import Image from "next/image";
export const Loading = () => {
	return (
		<div className="p-4 justify-center">
			<Image
				className="mx-auto mt-5"
				width={600}
				height={600}
				quality={100}
				src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif"
				alt="loading"
			/>
		</div>
	);
};
