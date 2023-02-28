// tools.js

import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from 'editorjs-header-with-alignment';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Paragraph from 'editorjs-paragraph-with-alignment';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';

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
	},
	quote: { class: Quote, inlineToolbar: true },
	marker: Marker,
	checklist: { class: CheckList, inlineToolbar: true },
	delimiter: Delimiter,
	inlineCode: InlineCode,
	simpleImage: SimpleImage,
	image: Image,
};

export default EDITOR_JS_TOOLS;
