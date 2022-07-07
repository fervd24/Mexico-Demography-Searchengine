
import { useEffect } from "react";
import indicatorData from "../config/stateIndicatorsData";
import ShowFinancial from "./showFinancialData";

import styles from "./showStateData.module.css"

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
        <div className={styles.showStateDataContainer}>
            <h1>{stateData.nom_agee || stateData.nom_agem}</h1>
            <h2>DEMOGRAFIA</h2>
            <div>Poblacion Total: <span className={styles.values}>{stateData.pob}</span></div>
            <div>Poblacion Masculina: <span className={styles.values}>{stateData.pob_mas}</span></div>
            <div>Poblacion Femenina: <span className={styles.values}>{stateData.pob_fem}</span></div>
            <div>Viviendas Habitadas: <span className={styles.values}>{stateData.viv}</span></div> 
            {ingEgStateInfo ? <ShowFinancial financialInfo={ingEgStateInfo}/>: null}
        </div>
    )
}