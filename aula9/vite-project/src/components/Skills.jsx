import Card from "./Card";

function Skills() {

    const habilidades = [
        {
            titulo: "Node",
            nivel: "noob",
            tmpxp: "1 dia",
            color: "red"
        },
        {
            titulo: "Props",
            nivel: "senior",
            tmpxp: "30 min",
            color: "blue"
        },
        {
            titulo: "Python",
            nivel: "Sensei",
            tmpxp: "329 anos",
            color: "yellow"
        },
        {
            titulo: "Ruby",
            nivel: "Honroso",
            tmpxp: "79 anos",
            color: "green"
        }
    ]

    return ( 
        <div className="skills">
            <h2>Habilidades</h2>
            <Card data={habilidades}/>
        </div>
     );
}

export default Skills;