import React, { useEffect, useState } from 'react'
import { useSelect } from '../hooks/useSelect';
import { FinancialDataGrid } from './FinancialDataGrid';

import styles from "./Home.module.css";
import { PoblationData } from './PoblationData';

export const Home = () => {
    const [idsIndicadores, setIdsIndicadores] = useState({ing: '', eg: ''});
    const {
        idGeo,
        statesData,
        citiesData,
        selectedStateData,
        selectedCityData,
        fetchCitiesStatesData,
        handleChangeState,
        handleChangeCity,
        handleClick,
    } = useSelect();

    useEffect(() => {
        fetchCitiesStatesData();
    },[idGeo]);

    return (
    <div>
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h1>CONSULTAS DEMOFIN</h1>
                <h4>Fuente: INEGI</h4>
            </div>
            <div className={styles.searchBarContainer}>
                <p>Estados</p>
                <select className={styles.optBar} onChange={handleChangeState}>
                    <option>--Estados--</option>
                    {
                        statesData.map(item => <option key={item.cvegeo} value={item.nom_agee || item.nom_agem}>{item.nom_agee || item.nom_agem}</option>)
                    }
                </select>
                <button className={styles.btnBar} onClick={handleClick}>Buscar</button>   
                <p>Municipios</p> 
                <select className={styles.optBar} onChange={handleChangeCity}>
                    <option>--Municipios--</option>
                    {
                        citiesData.map(item => <option key={item.cvegeo} value={item.nom_agee || item.nom_agem}>{item.nom_agee || item.nom_agem}</option>)          
                    }
                </select>
                <button className={styles.btnBar} onClick={handleClick}>Buscar</button>
            </div>  
            <div className={styles.dataContainer}>
                {selectedStateData && 
                    <div className={styles.dataSubcontainer}>
                        <PoblationData selectedData={selectedStateData} />
                        {selectedCityData && <PoblationData selectedData={selectedCityData}/>}
                        <FinancialDataGrid selectedData={selectedStateData} idsIndicadores={idsIndicadores} setIdsIndicadores={setIdsIndicadores}/>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
