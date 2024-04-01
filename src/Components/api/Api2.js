import axios from "axios";

export const Api2=(limit)=>{
    const url = 'http://universities.hipolabs.com/search?country=United+States&limit=' + limit;
    return axios.get(url)
    .then((Response)=>{
        return Response
    })
    .then((error)=>{
        console.log("Error"+error)
    })
}