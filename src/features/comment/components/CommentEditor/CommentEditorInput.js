import React, { useEffect, useRef } from 'react';

const CommentEditorInput = ({ isFocused, onChange, value }) => {
	const inputRef = useRef();
	useEffect(() => {
		if (inputRef?.current) {
			if (isFocused) inputRef.current.rows = 4;
			else {
				inputRef.current.rows = 1;
				inputRef.current.value = '';
			}
		}
	}, [isFocused, inputRef]);
	return (
		<textarea
			ref={inputRef}
			value={value}
			onFocus={(e) => {
				let val = e.target.value;
				e.target.value = '';
				e.target.value = val;
			}}
			rows={1}
			onChange={onChange}
			autoFocus={isFocused}
			className="w-full resize-none border-none px-4 text-sm outline-none"
			placeholder="What are you thoughts?"
		/>
	);
};

export default CommentEditorInput;
