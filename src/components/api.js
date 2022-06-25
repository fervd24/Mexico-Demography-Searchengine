import axios from "axios";
import { useEffect, useState } from "react";
import ShowMenus from "./showMenus";


export default function CallApi() {
    const [expensesInfo, setExpensesInfo] = useState([]);
    const [statesInfo, setStatesInfo] = useState([]);
    const [cityInfo, setCityInfo] = useState([]);
    
    const [idGeo, setIdGeo] = useState('01');
    const [idsIndicadores, setIdsIndicadores] = useState('440816');
    
    const fetchData = async () => {
        try {
            const res = await axios.get('https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/JSONSTAT/1011000022/es/070000050018/false/BISE/fb1fd2c6-1170-5ebe-fe91-3a4f7f8dc024?type=jsonStat');
            const expensesData = await res.data;
            
            const res2 = await axios.get('https://gaia.inegi.org.mx/wscatgeo/mgee/');
            const statesData = await res2.data.datos;
            
            const res3 = await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/${idGeo}`);
            const cityData = await res3.data.datos;
            
            const res4 = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001,1002000002,1002000003/es/07000001/false/BISE/2.0/fb1fd2c6-1170-5ebe-fe91-3a4f7f8dc024?type=json`);
            const aData = await res4.data;
            
            const res5 = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${idsIndicadores}/es/0700/true/BIE/2.0/fb1fd2c6-1170-5ebe-fe91-3a4f7f8dc024?type=json`);
            const ingresosData = await res5.data;
            
            setExpensesInfo(expensesData);
            setStatesInfo(statesData);
            setCityInfo(cityData);

            console.log(expensesData);    
            console.log(statesData);    
            console.log(cityData);  
            console.log(aData);  
            console.log(ingresosData);  
        } catch (error) {
            console.log(error);
        }
    }

    function changeStateId(cve) {
        setIdGeo(cve);
    }

    useEffect(() => {
        fetchData();
    },[idGeo, idsIndicadores]);

    return(    
        <>
            {idsIndicadores}
            <ShowMenus 
            expenses={expensesInfo} 
            statesInfo={statesInfo}
            cityInfo={cityInfo}
            changeId={changeStateId}
            setIdsIndicadores={setIdsIndicadores}
            />
        </>
        
    )
}