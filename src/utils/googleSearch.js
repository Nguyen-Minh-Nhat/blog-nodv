import axios from 'axios';

const googleSearch = async (keyword) => {
	const data = { gl: 'US', hl: 'en_US', keywords: [keyword] };
	try {
		const res = await axios.get(
			'https://cloudsearch.googleapis.com/v1/query/suggest',
			{
				params: {
					query: keyword,
				},
			}
		);

		return res.data.data[0].suggestions;
	} catch (error) {
		console.log(error);
	}
};

export default googleSearch;
