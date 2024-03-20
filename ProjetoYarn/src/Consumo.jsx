import { Card } from "./components/Card"
import Menu from "./components/Menu"

export const Consumo = () => {
    return(
        <div>
            <br />
            <br />
            <Menu/>
            <br />
            Consumindo JSON
            <Card
            name ="Nome 01"
            desc = "Descrição 01"
            value = "10,00"
            image="https://i.pinimg.com/originals/31/a5/14/31a514037c5ce1e460e64d20b76ad300.jpg"
            />
 
        </div>
    )


}