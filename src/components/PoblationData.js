import React from 'react'
import styles from './PoblationData.module.css';

export const PoblationData = ({selectedData}) => {
  const numberFormatter = Intl.NumberFormat('en-US');
  return (
    <div className={styles.infoContainer}>
        <h2>Demografia: {selectedData.nom_agee || selectedData.nom_agem}</h2>
        <hr/>
        <div>Poblacion Total: <span>{numberFormatter.format(selectedData.pob)}</span></div>
        <div>Poblacion Masculina: <span>{numberFormatter.format(selectedData.pob_mas)}</span></div>
        <div>Poblacion Femenina: <span>{numberFormatter.format(selectedData.pob_fem)}</span></div>
        <div>Viviendas Habitadas: <span>{numberFormatter.format(selectedData.viv)}</span></div> 
    </div>
  )
}

