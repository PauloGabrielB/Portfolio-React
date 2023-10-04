
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
export default function Main() {
    return (
        
    <section className="section-2" id="sobre">
        <div className="main-sobre">
            <h1>Sobre</h1> 
             <h5>Desenvolvedor <span>Full-Stack</span></h5>
             <p>Olá, eu sou o Paulo Gabriel e estou em uma transição de carreira para o universo do Desenvolvimento Web. Atualmente, estou me dedicando ao curso de Desenvolvimento Full-Stack, com um interesse particular no desenvolvimento tanto front-end quanto back-end. Estou em busca de uma oportunidade para atuar como desenvolvedor.</p>
             <h2>Formação</h2>
             <h2><a rel='noreferrer' href="https://digitalcollege.com.br/" target="_blank"> Digital College - </a><span>Full Stack  03/2023 ~ 03/2024</span></h2>
             <h2>Habilidades</h2>
             <div className='main-icons'>
                <FaHtml5/>
                <FaCss3Alt/>
                <FaJs/>
                <FaReact/>
                <FaGitAlt/>
                <FaNodeJs/>
                <FaBootstrap/> 
             </div>
             
        </div>
    </section>
    )
}