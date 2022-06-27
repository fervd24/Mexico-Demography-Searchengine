import axios from "axios";
import { useEffect, useState } from "react";
import ShowMenus from "./showMenus";

export default function CallApi() {
    const [expensesInfo, setExpensesInfo] = useState([]);
    const [statesInfo, setStatesInfo] = useState([]);
    const [cityInfo, setCityInfo] = useState([]);
    const [ingEgStateInfo, setIngEgStateInfo] = useState({});
    
    const [idGeo, setIdGeo] = useState('01');
    const [idsIndicadores, setIdsIndicadores] = useState({ing: '440816', eg: '440827'});
    
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/JSONSTAT/1011000022/es/070000050018/false/BISE/${process.env.REACT_APP_INEGI_TOKEN}?type=jsonStat`);
            const expensesData = await res.data;
            
            const res2 = await axios.get('https://gaia.inegi.org.mx/wscatgeo/mgee/');
            const statesData = await res2.data.datos;
            
            const res3 = await axios.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/${idGeo}`);
            const cityData = await res3.data.datos;
            
            const res4 = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001,1002000002,1002000003/es/07000001/false/BISE/2.0/${process.env.REACT_APP_INEGI_TOKEN}?type=json`);
            const aData = await res4.data.Series;
            
            const resIng = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${idsIndicadores.ing}/es/0700/false/BIE/2.0/${process.env.REACT_APP_INEGI_TOKEN}?type=json`);
            const ingresosData = await resIng.data.Series;
            
            const resEg = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${idsIndicadores.eg}/es/0700/false/BIE/2.0/${process.env.REACT_APP_INEGI_TOKEN}?type=json`);
            const egresosData = await resEg.data.Series;
            
            setExpensesInfo(expensesData);
            setStatesInfo(statesData);
            setCityInfo(cityData);
            setIngEgStateInfo({
                ingInfo: ingresosData[0].OBSERVATIONS,
                egInfo: egresosData[0].OBSERVATIONS
            });

            console.log(process.env.REACT_APP_INEGI_TOKEN);
            console.log(expensesData);    
            console.log(statesData);    
            console.log(cityData);  
            console.log(aData);  
            console.log(ingresosData[0].OBSERVATIONS);  
            console.log(egresosData[0].OBSERVATIONS);  
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
            <ShowMenus 
            expenses={expensesInfo} 
            statesInfo={statesInfo}
            cityInfo={cityInfo}
            changeId={changeStateId}
            setIdsIndicadores={setIdsIndicadores}
            ingEgStateInfo={ingEgStateInfo}
            />
        </>
        
    )
}