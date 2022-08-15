import axios from "axios";

export const fetchCityData = async (idGeo, setCities) => {
    try {
       
        const res3 = await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/${idGeo}`);
        const cityData = await res3.data.datos;
        
        setCities(cityData);     
    } catch (error) {
        console.log(error);
    }
}