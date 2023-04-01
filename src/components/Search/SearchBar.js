import { LoadingIcon, MagnifyingGlassIcon } from '../Icons';

import IconWrapper from '../IconWrapper';

const SearchBar = ({ onChange, onFocus, loading, ...props }) => {
	return (
		<div className="flex h-10 w-full items-center rounded-full border p-1 px-2">
			{loading ? (
				<IconWrapper size="h-10 w-10">
					<LoadingIcon />
				</IconWrapper>
			) : (
				<div className="cursor-pointer">
					<IconWrapper size="h-10 w-10">
						<MagnifyingGlassIcon />
					</IconWrapper>
				</div>
			)}
			<input
				placeholder="search"
				className="ml-2 w-full bg-transparent outline-none placeholder:font-thin"
				onChange={onChange}
				onFocus={onFocus}
				{...props}
			/>
		</div>
	);
};

export default SearchBar;
