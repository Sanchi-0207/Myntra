import axios from "axios";
import { baseURL } from "../Utilities/Network/Routes";

export const LikePosts = async (postID) => {
    try {
        const customAxios = axios.create({
            baseURL: baseURL, // Replace with your desired base URL
            timeout: 10000, // Optional timeout value
            headers: {
                'Content-Type': 'application/json',
                // Other default headers
            }
        });
        const response = await customAxios.put(`posts/${postID}/like`);
        return response.data;

    } catch (error) {
        console.log(error)
    }
};