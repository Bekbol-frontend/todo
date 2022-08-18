import axios from "axios";

export class getAllApi {
    static async getAll() {
            const response = await axios.get(
                `http://jsonplaceholder.typicode.com/posts?_limit=10`
            );
            return response;
    }
}