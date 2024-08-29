/* eslint-disable react/prop-types */
export default function Card({ data }) {
    return (
        <>
            {
                data.map((skill, index) => (
                    <div className="skill-card" key={index} style={{ color: skill.color }}>
                        <h3>{skill.titulo}</h3>
                        <p>Nível: {skill.nivel}</p>
                        <p>Tempo de experiência: {skill.tmpxp}</p>
                    </div>
               ))
            }
        </>
    )
}