import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost',
});

export const fetchGameModes = async () => {
    const { data } = await api.get('/games');

    return data['hydra:member'];
};
