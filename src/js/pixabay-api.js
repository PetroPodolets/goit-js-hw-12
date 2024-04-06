import axios from "axios";

const KEY = "43158866-7219a8d3eb05541ec3ccbc26d";
const URL = "https://pixabay.com/api/";

export async function searchPhoto(query, page, perPage) {
    const response = await axios.get(`${URL}?key=${KEY}&q=${query}&page=${page}&per_page=${perPage}`);
    return await response.data;
}