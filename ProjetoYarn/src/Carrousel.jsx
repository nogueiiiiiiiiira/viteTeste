import Menu from "./components/Menu"
import Slider from "react-slick";
import {Card} from "./components/Card";

export const Carrousel = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return(
        <>
        <Menu/>
            <h1>Slider Exemplo</h1>
    <Slider {...settings} >
        <div>
          <div className="sectionSlider imageSlider">
            <Card  
                name ="Ola"
                desc = "Delzida"
                value = "vai dar certo"
                image = "https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>

        <div>
          <div className="sectionSlider imageSlider">
            <Card 
                name = "Ola"
                desc = "Delzida"
                value = "vai dar certo"
                image = "https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>

        <div>
          <div className="sectionSlider imageSlider">
            <Card 
                name = "Thhau"
                desc = "Delzida"
                value = "vai dar certo"
                image = "https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>

        <div>
          <div className="sectionSlider imageSlider">
            <Card 
                name = "SIm"
                desc = "Delzida"
                value = "vai dar certo"
                image = "https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
            />
            </div>
        </div>
    
    <div>
      <div className="sectionSlider imageSlider">
        <Card 
            name = "Lasquera"
            desc = "Delzida"
            value = "vai dar certo"
            image = "https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
        />
        </div>
    </div>

    <div>
      <div className="sectionSlider imageSlider">
        <Card 
            name = "Lasquera"
            desc = "Delzida"
            value = "vai dar certo"
            image = "https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
        />
        </div>
    </div>
  
    
    </Slider>
        </>
    )
}