import axios from 'axios';

export const uploadImg = async (file) => {
	const formData = new FormData();
	formData.append('file', file);

	formData.append('upload_preset', process.env.REACT_APP_PRESET_NAME);
	formData.append('cloud_name', process.env.REACT_APP_CLOUD_NAME);
	formData.append('folder', 'blog-nodv');
	try {
		const res = await axios.post(
			`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
			formData
		);
		return res.data.url;
	} catch (error) {
		console.log(error);
	}
};
