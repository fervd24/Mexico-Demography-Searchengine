import axios from "axios";

export const fetchFinancialData = async(idsIndicadores, setFinancialStateData) => {
    try {
        const resIng = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${idsIndicadores.ing}/es/0700/false/BIE/2.0/${process.env.REACT_APP_INEGI_TOKEN}?type=json`);
        const ingresosData = await resIng.data.Series;
        
        const resEg = await axios.get(`https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${idsIndicadores.eg}/es/0700/false/BIE/2.0/${process.env.REACT_APP_INEGI_TOKEN}?type=json`);
        const egresosData = await resEg.data.Series;
              
        console.log(idsIndicadores);

        console.log('ing',ingresosData[0].OBSERVATIONS);  
        console.log('eg',egresosData[0].OBSERVATIONS); 
         
        setFinancialStateData({
            ing: ingresosData[0].OBSERVATIONS,
            eg: egresosData[0].OBSERVATIONS
        })

    } catch (error) {
        console.log(error);
    }
}