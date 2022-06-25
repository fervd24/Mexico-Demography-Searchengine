
import { useEffect } from "react";
import indicatorData from "../config/stateIndicatorsData";

export default function ShowStateData({stateData, setIdsIndicadores}) {
    
    function getIndicator(allIdData) {
        const [itemIndicator] = indicatorData.filter(item => item.cvegeo === allIdData.cvegeo);
        
        setIdsIndicadores(itemIndicator.indicatorIng);
        console.log(itemIndicator);
    }
    useEffect(() => {
        setIdsIndicadores ? getIndicator(stateData): console.log("No ids");;
    },[stateData]);

    return(
        <div>
            <div>Poblacion: {stateData.pob}</div>
            <div>Poblacion Masculina: {stateData.pob_mas}</div>
            <div>Poblacion Femenina: {stateData.pob_fem}</div>     
        </div>
    )
}