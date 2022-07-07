import { useState } from "react"
import OptGen from "./optGen";
import ShowStateData from "./showStateData";

import styles from "./showMenus.module.css";

export default function ShowMenus({expenses, statesInfo, cityInfo, changeId, setIdsIndicadores, ingEgStateInfo}) {
    const [stateValue, setStateValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [selectedStateData, setSelectedStateData] = useState(null);  
    const [selectedCityData, setSelectedCityData] = useState(null); 

    function handleChangeState(e) {
        setStateValue(e.target.value);
    }

    function handleChangeCity(e) {
        setCityValue(e.target.value);
    }
    
    function handleClick() {
        statesInfo.filter(state => stateValue === state.nom_agee ? setSelectedStateData({...state}): false);
        statesInfo.filter(state => stateValue === state.nom_agee ? changeId(state.cvegeo): false);
        cityInfo.filter(state => cityValue === state.nom_agem ? setSelectedCityData({...state}): false);
        
        console.log(stateValue);
        console.log(cityValue);
    }      

    return(
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h1>CONSULTAS DEMOFIN</h1>
                <h4>Fuente: INEGI({expenses.label})</h4>
            </div>
            <div className={styles.searchBarContainer}>
                <p>Estados</p>
                <OptGen 
                    option={statesInfo} 
                    defSent="-- Estados --" 
                    handleChange={handleChangeState}
                    handleClick={handleClick}
                />    
                <p>Municipios</p>
                <OptGen 
                    option={cityInfo} 
                    defSent="-- Municipios --"
                    handleChange={handleChangeCity}
                    handleClick={handleClick}
                />       
            </div>
            <div className={styles.stateDataContainer}>
                {
                    selectedStateData ? <ShowStateData stateData={selectedStateData} setIdsIndicadores={setIdsIndicadores} ingEgStateInfo={ingEgStateInfo}/>: false
                }
                <hr/>
                {
                    selectedCityData ? <ShowStateData stateData={selectedCityData} />: false
                }
            </div>
            
        </div>
    )
}