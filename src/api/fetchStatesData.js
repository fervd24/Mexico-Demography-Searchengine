import axios from "axios";

export const fetchStatesData = async(setStates) => {
    try {
        const res2 = await axios.get('https://gaia.inegi.org.mx/wscatgeo/mgee/');
        const statesData = await res2.data.datos;
        
        //console.log(statesData); 
        setStates(statesData);
    } catch (error) {
        console.log(error);
    }
  
}
