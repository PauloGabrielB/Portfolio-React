
import rosto from '../assets/rosto.gif'


export default function Hero() {
    return (

         <section className="grid-container background">
        <div className="container">
            <h1 className="oi">Oi, me chamo Paulo Gabriel</h1>
            <div className="principal">
                 <h1 className="fullstack">FULLSTACK</h1>
                 <a rel='noreferrer' href="https://github.com/PauloGabrielB" target="_blank"><button className="btn-icons">GitHub</button></a>
                 <a rel='noreferrer' href="https://www.linkedin.com/in/paulo-gabriel-931534242/" target="_blank"><button className="btn-icons">Linkedin</button></a>
                 {/* <a rel='noreferrer' href="./" target="_blank"><button className="btn-icons">CV</button></a>  */}
                 
            </div>
            <h1 className="developer txt-grad">DEVELOPER</h1>
            <p>Tenho 22 anos, sou desenvolvedor fullstack com 1 ano de experiência trabalhando como freelancer.</p>
                <div className="rosto">
                <img src={rosto}/>
                </div>
        </div>
    </section>
        
    )
}
