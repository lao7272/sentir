import AboutSlider from "../../components/AboutSlider/AboutSlider";
export default function About() {
    
    return (
        <div className="about">
            <div className="about-main">
                <div className="about-main-img" style={{backgroundImage: "url(./assets/gallery/about/about.jpg)"}}></div>
            </div>
            <div className="about-history">
                <div className="about-history-wrapper">
                    <h3>Nuestra historia</h3>
                    <p>En 2022 me moría de ganas de hacer un evento artístico, no entendia muy bien cómo, pero me llamaba mucho la atención juntar muchos artistas en un mismo lugar exponiendo lo que les gusta hacer. Pero había algo que me incomodaba, quería hacerlo con un fin mas claro. 
                    </p>
                    <p>Pocos meses después fui a un evento en donde me atravesaron un montón de emociones y ahí entendí que quería realizar un evento dónde se promueva el sentir, donde se tome registro del tiempo y espacio, donde permitamos experimentar distintas emociones o ser conscientes de cuánto luchamos contra nuestro sentir.
                    </p>
                    <p>Se lo compartí a una amiga, su carita me dio mas ganas de llevar mi idea a cabo. Lo seguí compartiendo y cada uno/a me ayudó de una manera diferente. Tanto para bajar las ideas a cabo, para pensar en números, para diseñar el logo, aprender de sonido, editar el flyer, buscar locación y para darme un abrazo. Cada personita dio su parte, lo que para mí  era el inicio de una gran red. Fue así como a su tiempo se concretó el primer evento, “Sentir es existir” el 30 de Octubre de 2022. 
                    </p>
                    <p>Hoy se creó una hermosa red por amor al arte, una comunidad de personitas dispuestas a registrar su sentir y valorar el arte.
                    </p>
                    <h5>
                    ¡Gracias por ser parte!
                    </h5>
                </div>
            </div>
            <AboutSlider/>
        </div>
    )
}