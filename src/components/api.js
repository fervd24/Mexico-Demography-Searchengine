import axios from "axios";
import { useEffect, useState } from "react";
import ShowMenus from "./showMenus";

export default function CallApi() {
    const [expensesInfo, setExpensesInfo] = useState([]);
    const [statesInfo, setStatesInfo] = useState([]);
    const [cityInfo, setCityInfo] = useState([]);

    const [idGeo, setIdGeo] = useState('01');
    
    const fetchData = async () => {
        try {
            const res = await axios.get('https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/JSONSTAT/1011000022/es/070000050018/false/BISE/fb1fd2c6-1170-5ebe-fe91-3a4f7f8dc024?type=jsonStat');
            const expensesData = await res.data;
            
            const res2 = await axios.get('https://gaia.inegi.org.mx/wscatgeo/mgee/');
            const statesData = await res2.data.datos;
            
            
            const res3 = await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/${idGeo}`);
            const cityData = await res3.data.datos;
            
            setExpensesInfo(expensesData);
            setStatesInfo(statesData);
            setCityInfo(cityData);

            console.log(expensesData);    
            console.log(statesData);    
            console.log(cityData);    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <>
            <ShowMenus 
            expenses={expensesInfo} 
            statesInfo={statesInfo}
            cityInfo={cityInfo}
            />
            {idGeo}
        </>
    )
}