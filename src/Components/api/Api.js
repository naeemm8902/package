// import axios from "axios"
// export const fetchUniversities = async (limit) => {
//     const url = 'http://universities.hipolabs.com/search?country=United+States&limit=' + limit;
//    const result = await axios.get(url);
//    return result;
   
// }

import axios from "axios";
export const fetchUniversities=(limit)=>{
    const url = 'http://universities.hipolabs.com/search?country=United+States&limit=' + limit;
    return axios.get(url)
        .then((Response)=>{
         return Response;
        })
        .catch((error)=>{
            console.log('Error' + error)
            return(error);
        });

};