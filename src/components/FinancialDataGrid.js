import React, { useEffect, useState } from 'react'
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import indicatorData from '../utils/stateIndicatorsData';
import { fetchFinancialData } from '../api/fetchFinancialData';

import styles from "./FinancialDataGrid.module.css";

export const FinancialDataGrid = ({selectedData, idsIndicadores, setIdsIndicadores}) => {

    const [financialStateData, setFinancialStateData] = useState(null);
    const [rowsFinancialData, setRowsFinancialData] = useState([]);

    const currency = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    })

    const [columnDefs] = useState([
        {field: 'Año', sortable: true, width: 140},
        {field: 'Ingresos', sortable: true},
        {field: 'Egresos', sortable: true},
      ]);

    const createRows = (financialData) => {
        if(financialData){
            financialData.ing.map(item => setRowsFinancialData(prev => [...prev, {
                Año: item.TIME_PERIOD, 
                Ingresos: item.OBS_VALUE ?  currency.format(item.OBS_VALUE): 'N/A',
                Egresos: item.OBS_VALUE ?  currency.format(item.OBS_VALUE): 'N/A',
            }]));
        }
    }   

    const updateIndicators = () => {
        
        console.log('selec2', selectedData);
        const [selectedIndicators] = indicatorData.filter(item => item.cvegeo === selectedData.cvegeo)
        
        if(selectedIndicators){
            setIdsIndicadores({
                ing: selectedIndicators.indicatorIng,
                eg: selectedIndicators.indicatorEg
            })
            console.log('selecIndicators', selectedIndicators);
        } 
    }
    
    useEffect(()=>{
        fetchFinancialData(idsIndicadores, setFinancialStateData);
    },[idsIndicadores])
    
    useEffect(() => {
        updateIndicators();
    }, [selectedData]);

    useEffect(() => {
        setRowsFinancialData([]);
        createRows(financialStateData);
    }, [financialStateData]);


  return (
    <div className={styles.mainFinancial}>
        <h2>Finanzas: {selectedData.nom_agee}</h2>
        <hr/>
        <div className='ag-theme-alpine-dark' style={{height:350, width:'auto', marginTop: 40}}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowsFinancialData}
                paginationAutoPageSize={true}
                pagination={true}
              />
        </div>
    </div>
  )
}
