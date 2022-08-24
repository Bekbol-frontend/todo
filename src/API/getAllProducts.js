import axios from "axios";

export class getAllApi {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get(
            `http://jsonplaceholder.typicode.com/posts?_limit=${limit}`, {
                params: {
                    _limit: limit,
                    _page: page
                }
            }
        );
        return response;
    }
}