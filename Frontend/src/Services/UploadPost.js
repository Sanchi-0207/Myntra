import { baseURL } from "../Utilities/Network/Routes";
import axios from "axios";

export const uploadPosts = async (outfit) => {
    try {
        const customAxios = axios.create({
            baseURL: baseURL, // Replace with your desired base URL
            timeout: 10000, // Optional timeout value
            headers: {
                'Content-Type': 'application/json',
                // Other default headers
            }
        });
        console.log(outfit);
        const response = await customAxios.post(`posts`,{
            "photos":outfit
        });
        console.log(response.data);
    } catch (error) {
       console.log(error)
    }
};