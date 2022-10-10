import Image from '@editorjs/image';
import { Button } from '@mui/material';
import { useCallback, useMemo, useRef, useState } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { deleteImg, uploadImg } from '../../utils/firebaseFns';
import EDITOR_JS_TOOLS from './tool';
const Editor = () => {
	const [data, setData] = useState(null);
	const editorCore = useRef(null);

	const prevImage = useRef([]);

	const tools = useMemo(() => {
		return {
			...EDITOR_JS_TOOLS,
			image: {
				class: Image,
				config: {
					uploader: {
						uploadByFile: async (file) => {
							const url = await uploadImg(file);
							prevImage.current.push(url);
							return {
								success: 1,
								file: {
									url,
								},
							};
						},
					},
				},
			},
		};
	}, []);

	const handleInitialize = useCallback((instance) => {
		editorCore.current = instance;
	}, []);
	const handleSave = useCallback(async () => {
		const savedData = await editorCore.current.save();
		setData(savedData);
	}, []);

	const handleChange = (e) => {
		const currentImages = [];
		document
			.querySelectorAll('.image-tool__image-picture')
			.forEach((x) => currentImages.push(x.src));
		if (prevImage.current.length > currentImages.length) {
			prevImage.current.forEach(async (img) => {
				if (!currentImages.includes(img)) {
					deleteImg(img);
				}
			});
		}

		prevImage.current = currentImages;
	};

	const ReactEditorJS = createReactEditorJS();
	return (
		<div>
			<ReactEditorJS
				tools={tools}
				onInitialize={handleInitialize}
				autofocus
				defaultValue={{
					time: 1635603431943,
					blocks: [
						{
							id: 'sheNwCUP5A',
							type: 'header',
							data: {
								text: 'Tittle',
								level: 2,
							},
						},
					],
				}}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
			<Button onClick={handleSave}>Save</Button>
		</div>
	);
};

export default Editor;
