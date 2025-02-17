import {API_URL} from "@/contants";

export async function getSubTowns() {
    const res = await fetch(`${API_URL}api/fetch-subtowns/products`);
    const data = await res.json();
    return data;
}