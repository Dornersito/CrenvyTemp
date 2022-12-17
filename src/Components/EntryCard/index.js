

const EntryCard = props =>{
    //console.log(props);
    const {entryData} = props; //Toma los valores de props(obejeto con los datos)
    const {entryTitle, content, picture, animo, weather, hour, weather_text} = entryData; //Le pasamos los valores desde entryData
    return(
        <div className="blog-entry">
            <a href= {picture[1]} target="_blank" rel="noreferrer">
            <img src={picture[0]} alt=""/>
            </a>
            <h2>{content}</h2>
            <p align="center">{entryTitle} se encuentra {animo}, mientras escucha "{content}"</p>

            <ul>
                <li >
                    <img src = {weather} alt = "icon"/> 
                </li>
                <li>
                    <div>{hour}</div>
                    <div>{weather_text}</div>
                </li>
                <li>
                    <button>Like!</button>
                </li>
            </ul>
            
            
        </div>
    )
}
export default EntryCard