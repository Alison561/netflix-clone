const API_KEY = 'api_key=e6ebd0d06cff79d6876cd4972f0be49a'

const api = { 
    originais:  `/discover/tv?with_network=213&${API_KEY}&language=pt-BR`,
    recomendados:  `/trending/all/week?${API_KEY}&language=pt-BR`,
    acao:  `/discover/movie?with_genres=28&${API_KEY}&language=pt-BR`,
    comedia:  `/discover/movie?with_genres=27&${API_KEY}&language=pt-BR`
}

export default api