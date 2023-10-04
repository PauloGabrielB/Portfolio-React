import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3>Copyrigth &copy; 2023</h3>
                <ul>
                    <li id="github">
                        <a rel="noreferrer" target="_blank" href="https://github.com/PauloGabrielB">
                           <FaGithub /> 
                        </a>
                    </li>
                    <li id="linkedin">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/paulo-gabriel-931534242/">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}