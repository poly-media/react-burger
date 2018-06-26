import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-8848d.firebaseio.com/'
});

export default instance;