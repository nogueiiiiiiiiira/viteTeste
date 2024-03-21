export const Card = (props) => {
    return(
        <>
            <div className="Card">
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>{props.value}</p>
            <img class = "imageSlider" src={props.image} alt="Imagem"/>
            </div>
            
            </>
    )
}