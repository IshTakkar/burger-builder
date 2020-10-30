import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e5fe1.firebaseio.com/'
});

export default instance;