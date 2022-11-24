import React from 'react';

const SettingInput = ({ title, label, children }) => {
	return (
		<div className="my-8 flex flex-col">
			<label
				for={title}
				className="mb-2 text-sm leading-6 hover:cursor-pointer"
			>
				{title}
			</label>
			<label for={title} className="text-[13px] hover:cursor-pointer">
				{label}
			</label>
			{children}
		</div>
	);
};
export default SettingInput;
