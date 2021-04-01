export const fetchHousesApi = async (url) => {
    return await (await fetch(url)).json();
};