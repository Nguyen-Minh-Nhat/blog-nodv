import React from 'react';

export const PostListLoading = () => {
	return (
		<div className="mt-4 flex flex-col gap-24">
			<Item />
			<Item />
			<Item />
		</div>
	);
};

function Item() {
	return (
		<div className="relative flex w-full justify-between gap-32">
			<div className="flex flex-1 flex-col">
				<div className="flex items-center gap-2">
					<div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
					<div className="h-4 w-32 animate-pulse rounded bg-gray-200 text-base font-bold" />
				</div>
				<div className="mt-3 block">
					<div className="h-6 w-64 animate-pulse rounded bg-gray-200 text-base font-bold"></div>
					<div className="mt-3 flex flex-col gap-2">
						<div className="h-4 w-full animate-pulse rounded bg-gray-200" />
						<div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
					</div>
				</div>
			</div>
			<div className="h-28 w-28 animate-pulse rounded bg-gray-200"></div>
		</div>
	);
}
