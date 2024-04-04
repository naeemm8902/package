import axios from "axios";

export const api2=(limit)=>{
    const url = 'http://universities.hipolabs.com/search?country=United+States&limit=' + limit;
    // const url = 'https://api.themoviedb.org/3/movie/now_playing';
    return axios.get(url)
    .then((Response)=>{
        return Response
        console.log("sucess")
    })
    .then((error)=>{
        console.log("Error"+error)
        return error

    })
}
// a5e7fc39a647083acf81c810b6a97357