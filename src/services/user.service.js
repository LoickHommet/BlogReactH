import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService {

    /**
     *  Get list of post
     * @returns {Promise<AxiosResponse<any>}
     * 
     */
    static async list() {
        let response = await axios.get(`${baseUrl}/users`); 
        let users = response.data;

        for (let user of users) {
            let responsePost = await axios.get(`${baseUrl}/users/${user.id}/posts`);
            let posts =responsePost.data;
            user.nbrPost = posts.length;
        }
           return users;
    }
    /**
     * Create post
     * @param data 
     * @returns {Promise<AxiosResponse<any>}
     */
    static async create(data) {
        return await axios.post(`${baseUrl}/users`, data)
    }
    /**
     * Details of port
     * @param {*} id 
     * @returns 
     */
    static async details(id) {
        return await axios.get(`${baseUrl}/users/${id}`)
    }

    static async update(id, data) {
        return await axios.put(`${baseUrl}/users/${id}`, data)
    }

    static async delete(id) {
        return await axios.delete(`${baseUrl}/users/${id}`)
    }
}