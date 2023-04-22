import api from ".";

export async function processQuery(query){
    const res = await api.post('/query',{ query })
    return res.data
}