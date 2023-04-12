import { axiosClientPrivate } from './axiosClient';

const url = '/reporting';

const reportingApi = {
	createReport: (report) => axiosClientPrivate.post(url, report),
};

export const { createReport } = reportingApi;

export default reportingApi;
