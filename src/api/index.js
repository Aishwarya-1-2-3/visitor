import axios from "axios";
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
   
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': 'c1a7475590mshbe6eb83d24323c5p1b5c1ejsnea7f23f95322',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  
export const getPlacesData=async(sw,ne)=>
{
    try{
        const {data:{data}}=await axios.get(URL,options);
       return data;
    }
    catch(error)
    {
console.log(error)
    }
}