import React from 'react'
import styles from './PoblationData.module.css';

export const PoblationDataGrid = ({selectedData}) => {
  
  return (
    <div className={styles.infoContainer}>
        <h2>Demografia: {selectedData.nom_agee || selectedData.nom_agem}</h2>
        <hr/>
        <div>Poblacion Total: <span>{selectedData.pob}</span></div>
        <div>Poblacion Masculina: <span>{selectedData.pob_mas}</span></div>
        <div>Poblacion Femenina: <span>{selectedData.pob_fem}</span></div>
        <div>Viviendas Habitadas: <span>{selectedData.viv}</span></div> 
    </div>
  )
}

