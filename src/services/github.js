import axios from "axios";

const Base_URL = 'https://api.github.com';

export const getUserData = async (username) => {
    const response = await axios.get(`${Base_URL}/users/${username}`);
    return response.data;
};