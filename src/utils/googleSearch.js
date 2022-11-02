import axios from 'axios';

const googleSearch = async (keyword) => {
	const data = { gl: 'US', hl: 'en_US', keywords: [keyword] };
	try {
		const res = await axios.post(
			'https://google-search-5.p.rapidapi.com/google/search-suggestions',
			data,
			{
				headers: {
					'content-type': 'application/json',
					'X-RapidAPI-Key':
						'92a2e1975amsh3107c47c1e9d099p1077a2jsn0b653a4fed14',
					'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com',
				},
			}
		);

		return res.data.data[0].suggestions;
	} catch (error) {
		console.log(error);
	}
};

export default googleSearch;
