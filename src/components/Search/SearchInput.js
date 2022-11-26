import IconWrapper from '../IconWrapper';

const SearchInput = ({ onChange, onFocus }) => {
	return (
		<div className="flex h-10 w-full items-center rounded-full border p-1">
			<div className="cursor-pointer">
				<IconWrapper size="h-10 w-10">
					<i className="fa-solid fa-magnifying-glass font-normal"></i>
				</IconWrapper>
			</div>
			<input
				placeholder="search"
				className="w-full outline-none placeholder:font-thin"
				onChange={onChange}
				onFocus={onFocus}
			/>
		</div>
	);
};

export default SearchInput;
