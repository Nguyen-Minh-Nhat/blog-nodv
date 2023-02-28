import EDITOR_JS_TOOLS from './tool';
import { createReactEditorJS } from 'react-editor-js';
import { htmlToBlocks } from '../../utils';
import { useMemo } from 'react';

const EditorReadOnly = ({ defaultValue }) => {
	const ReactEditorJS = createReactEditorJS();
	const blockData = useMemo(() => {
		return htmlToBlocks(defaultValue);
	}, [defaultValue]);

	console.log(blockData);

	return (
		<div id="article" className="prose max-w-none">
			<ReactEditorJS
				tools={EDITOR_JS_TOOLS}
				readOnly
				defaultValue={blockData}
			/>
		</div>
	);
};

export default EditorReadOnly;
