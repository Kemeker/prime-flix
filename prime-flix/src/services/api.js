import axios from 'axios'
// BASE DA UTL: https://api.themoviedb.org/3/
// ROTAS DA API: movie/now_playing?api_key=85d01feec3df4947070d8ce307163e40&language=pt-BR 



const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api