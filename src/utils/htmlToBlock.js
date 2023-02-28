export function htmlToBlocks(html) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');
	const blocks = [];
	for (const node of doc.body.childNodes) {
		const block = {};
		// eslint-disable-next-line default-case
		switch (node.nodeName.toLowerCase()) {
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6':
				block.type = 'header';
				block.data = {
					level: parseInt(node.nodeName.charAt(1), 10),
					text: node.innerText,
				};
				break;
			case 'p':
				block.type = 'paragraph';
				block.data = {
					text: node.innerText,
				};
				break;
			case 'ul':
			case 'ol':
				block.type = 'list';
				block.data = {
					style: node.nodeName.toLowerCase(),
					items: [],
				};
				for (const liNode of node.childNodes) {
					if (liNode.nodeName.toLowerCase() === 'li') {
						block.data.items.push(liNode.innerText);
					}
				}
				break;
			case 'blockquote':
				block.type = 'quote';
				block.data = {
					text: node.innerText,
				};
				break;
			case 'figure':
				block.type = 'embed';
				block.data = {
					code: node.querySelector('iframe').getAttribute('src'),
				};
				break;
			case 'hr':
				block.type = 'delimiter';
				block.data = {};
				break;
			case 'table':
				block.type = 'table';
				block.data = {
					content: [],
				};
				const rows = node.querySelectorAll('tr');
				for (const row of rows) {
					const cells = row.querySelectorAll('td, th');
					const rowData = [];
					for (const cell of cells) {
						rowData.push(cell.innerText);
					}
					block.data.content.push(rowData);
				}
				break;
			case 'code':
				block.type = 'code';
				block.data = {
					code: node.innerText,
				};
				break;
			case 'img':
				block.type = 'image';
				block.data = {
					url: node.getAttribute('src'),
					caption: node.getAttribute('alt') || '',
				};
				break;
			case 'a':
				block.type = 'linkTool';
				block.data = {
					link: node.getAttribute('href'),
					meta: {
						title: node.innerText,
					},
				};
				break;

			case 'pre':
				block.type = 'raw';
				block.data = {
					html: node.innerHTML,
				};
				break;
			case 'div':
				// Check if the div contains a specific class or attribute to determine its type
				if (node.classList.contains('my-custom-class')) {
					block.type = 'myCustomBlock';
					block.data = {
						// Parse the content of the div as needed
						content: node.innerText,
					};
				} else {
					// Default to treating the div as a generic container block
					block.type = 'container';
					block.data = {
						html: node.innerHTML,
					};
				}
				break;
			case 'strong':
				block.type = 'text';
				block.data = {
					text: node.innerText,
					bold: true,
				};
				break;

			case 'em':
				block.type = 'text';
				block.data = {
					text: node.innerText,
					italic: true,
				};
				break;

			case 'u':
				block.type = 'text';
				block.data = {
					text: node.innerText,
					underline: true,
				};
				break;

			case 'strike':
				block.type = 'text';
				block.data = {
					text: node.innerText,
					strike: true,
				};
				break;

			case 'br':
				block.type = 'paragraph';
				block.data = {
					text: '',
				};
				break;

			case 'span':
				// Check if the span has a specific class or attribute to determine its type
				if (node.classList.contains('my-custom-class')) {
					block.type = 'myCustomBlock';
					block.data = {
						// Parse the content of the span as needed
						content: node.innerText,
					};
				} else {
					// Default to treating the span as plain text
					block.type = 'text';
					block.data = {
						text: node.innerText,
					};
				}
				break;
		}

		if (block.type) {
			blocks.push(block);
		}
	}

	return {
		time: Date.now(),
		blocks,
	};
}
