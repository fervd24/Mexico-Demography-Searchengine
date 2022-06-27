import styles from "./optGen.module.css";

export default function OptGen({option, defSent, handleChange, handleClick}) {
    
    return(
        <>
            <select className={styles.optBar} onChange={handleChange}>
                <option value="">{defSent}</option>
                {option.map((item) => <option key={item.cvegeo} value={item.nom_agee || item.nom_agem}>{item.nom_agee || item.nom_agem}</option>       
                )}
            </select>
            <button className={styles.btnBar} onClick={handleClick}>Buscar</button>
        </>
    )
}