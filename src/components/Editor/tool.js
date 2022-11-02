// tools.js
import Code from '@editorjs/code';
import Embed from '@editorjs/embed';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Raw from '@editorjs/raw';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';
import Header from 'editorjs-header-with-alignment';
import Paragraph from 'editorjs-paragraph-with-alignment';

const EDITOR_JS_TOOLS = {
	paragraph: {
		class: Paragraph,
		inlineToolbar: true,
		config: {
			placeholder: 'Tell your story...',
		},
	},
	embed: Embed,
	table: Table,
	list: { class: List, inlineToolbar: true },
	warning: Warning,
	code: Code,
	linkTool: LinkTool,
	raw: Raw,
	header: {
		class: Header,
		inlineToolbar: true,
		config: {
			placeholder: 'Title',
		},
	},
	quote: { class: Quote, inlineToolbar: true },
	marker: Marker,
	checklist: { class: CheckList, inlineToolbar: true },
	delimiter: Delimiter,
	inlineCode: InlineCode,
	simpleImage: SimpleImage,
};

export default EDITOR_JS_TOOLS;
