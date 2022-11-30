import { createReactEditorJS } from 'react-editor-js';
import EDITOR_JS_TOOLS from './tool';

const EditorReadOnly = ({ defaultValue }) => {
	const ReactEditorJS = createReactEditorJS();

	return (
		<div id="article" className="prose max-w-none">
			<ReactEditorJS
				tools={EDITOR_JS_TOOLS}
				readOnly
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default EditorReadOnly;
