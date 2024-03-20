import { Card } from "./components/Card"
import Menu from "./components/Menu"
import data from "./constants/produtos.json"

export const Consumo = () => {
    return(
        <div>
            <br />
            <br />
            <Menu/>
            <br />
            Consumindo JSON
            {data.map((item) => {
                return(
                
                <Card
                name = {item.name}
                desc = {item.desc}
                value = {item.value}
                image = {item.image}
            />
                )
            })}
 
        </div>
    )


}