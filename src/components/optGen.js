export default function OptGen({option, defSent, handleChange, handleClick}) {
    
    return(
        <>
            <select onChange={handleChange}>
                <option value="">{defSent}</option>
                {option.map((item) => <option key={item.cvegeo} value={item.nom_agee || item.nom_agem}>{item.nom_agee || item.nom_agem}</option>       
                )}
            </select>
            <button onClick={handleClick}>Buscar</button>
        </>
    )
}