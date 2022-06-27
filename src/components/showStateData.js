
import { useEffect } from "react";
import indicatorData from "../config/stateIndicatorsData";
import ShowFinancial from "./showFinancialData";

export default function ShowStateData({stateData, setIdsIndicadores, ingEgStateInfo = null}) {
    
    function getIndicator(allIdData) {
        const [itemIndicator] = indicatorData.filter(item => item.cvegeo === allIdData.cvegeo);
        
        setIdsIndicadores({
            ing: itemIndicator.indicatorIng,
            eg: itemIndicator.indicatorEg
        });
        console.log(itemIndicator);
        console.log('STATE INFO ',ingEgStateInfo);
    }
    useEffect(() => {
        setIdsIndicadores ? getIndicator(stateData): console.log("No ids");;
    },[stateData]);

    return(
        <div>
            <h1>{stateData.nom_agee || stateData.nom_agem}</h1>
            <h2>DEMOGRAFIA</h2>
            <div>Poblacion: {stateData.pob}</div>
            <div>Poblacion Masculina: {stateData.pob_mas}</div>
            <div>Poblacion Femenina: {stateData.pob_fem}</div>
            <div>Viviendas Habitadas: {stateData.viv}</div> 
            {ingEgStateInfo ? <ShowFinancial financialInfo={ingEgStateInfo}/>: null}
        </div>
    )
}