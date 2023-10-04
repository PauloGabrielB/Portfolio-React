import bolha from '../assets/bolha.gif'

export default function Header() {
    return (
      
<header className="navbar background" id='home'>
    <nav>
        <a href="#home"><button className='btn-header'>Home</button></a>
        <a href="#sobre"><button className='btn-header'>Sobre</button></a>
        <a href="#projetos"><button className='btn-header'>Projetos</button></a>
    </nav>
    <div className="bolha">
    <img src={bolha} />
    </div>
</header>

    )
  }
  

  