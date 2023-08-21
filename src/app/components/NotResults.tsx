import Image from "next/image";
export const NotResults = () => {
	return (
		<div className="p-2 -my-8 justify-center">
			<Image
				className="mx-auto rounded shadow-sm shadow-green-500"
				width={400}
				height={400}
				quality={100}
				src="https://media.giphy.com/media/26BkNsQzs593dRzJ6/giphy.gif"
				alt="NotResults"
			/>
		</div>
	);
};
