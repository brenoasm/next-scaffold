import axios from 'axios';

const httpClient = (url: string) => axios.get(url).then((res) => res.data);

export default httpClient;
