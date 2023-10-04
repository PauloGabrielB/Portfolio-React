
export default function Projects() {
    return (
        <section className="section-3 background" id="projetos">
        <div className="textoProjetos">
            <h2>Projetos</h2>
            <p>Veja os projetos onde coloquei meus conhecimentos em prática.</p>
        </div>
        <div className="projetos">
            <div className="container-card cc1">
                <div className="card">
                    <div className="img-1">
                    </div>
                    <div className="content">
                    <span className="tittle">Landing Page Foody</span>
                    <p className="desc">
                        Fui o encarregado de criar esse projeto de página web. Durante todo o processo, me certifiquei de seguir as melhores práticas de desenvolvimento de software, mostrando minha experiência como desenvolvedor web.
                    </p>
                    <div className="btns">
                      <button href="" className="btn-card">
                        <a rel='noreferrer' target="_blank" href="https://paulogabrielb.github.io/Landing-Page-Foody/" >Ver Site</a>
                    </button>
                    <button className="btn-card">
                        <a rel="noreferrer" target="_blank" href="https://github.com/PauloGabrielB/Landing-Page-Foody">Projeto</a>
                    </button>  
                    </div>
                    
                </div>
                </div>
            </div>

            <div className="container-card cc2">
                <div className="card">
                    <div className="img-2">
                      
                    </div>
                    <div className="content">
                    <span className="tittle">Em Breve</span>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eos perferendis esse illo! Cupiditate, deserunt corporis, quae dicta neque quas dolores expedita, eos voluptates cumque consectetur totam rem numquam vel.
                    </p>
                    <button href="" className="card-btn"  id="btn">
                        <a href=" " target="_blank">Conferir</a>
                    </button>
                    </div> 
                </div>
            </div>
        </div> 
    </section>
    )
}