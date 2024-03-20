
import Graficos from "./components/Graficos"
import Menu from "./components/Menu"

export const Home = () => {
    return(
        <>
        <br />
         <Menu/>
        <Graficos text="Gráfico de linha" color="lightpink" whatChart ='line'/>
        <Graficos text="Gráfico de área" color="lightblue" whatChart ='area'/>
        <Graficos text="Gráfico de pizza" color="lightgrey" whatChart ='pizza'/>
        <Graficos text="Gráfico de barra" color="lightgreen" whatChart ='bar'/>
        </>
    )
}