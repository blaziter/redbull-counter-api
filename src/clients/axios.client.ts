import CreateAxiosInstance from '@types';
import axios, { AxiosInstance } from 'axios';

export const createAxiosInstance = ({
    baseUrl,
}: CreateAxiosInstance): AxiosInstance =>
    axios.create({
        baseURL: baseUrl,
        decompress: false,
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
        },
    });
