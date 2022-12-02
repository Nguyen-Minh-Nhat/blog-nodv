import PostThumbnail from '../PostPreview/PostThumbnail';

const ThumbnailSelectBox = ({ initial, images, onChange }) => {
	console.log(images);
	return (
		<div className="flex items-center rounded border p-4">
			{images.length > 0 ? (
				<div className="mx-auto my-4 grid grid-cols-5 gap-2">
					{images.map((img) => (
						<div
							key={img}
							className={`cursor-pointer rounded-xl ${
								initial === img ? 'shadow-[0_0_0_3px_#22c55e]' : ''
							}`}
							onClick={() => onChange(img)}
						>
							<PostThumbnail src={img} />
						</div>
					))}
				</div>
			) : (
				<div className="flex h-28 w-full items-center justify-center">
					No images to select
				</div>
			)}
		</div>
	);
};

export default ThumbnailSelectBox;
