import api from ".";

export async function processQuery(query,nor){
    const res = await api.post('/query',{ query,no_of_recomendations:nor })
    return res.data
}