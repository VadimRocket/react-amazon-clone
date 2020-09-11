import axios from 'axios'

const instance =axios.create({
    baseURL: '..', // Api (cloud fn) URL
})
export default instance;