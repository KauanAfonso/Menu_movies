import estilos from './Footer.module.css';
import { Copy } from './copy';

export function Footer() {
    return (
        <footer className={estilos.footer}>
            <hr />
            <div className={estilos.container}>
                <div className={estilos.logoArea}>
                    <h2 className={estilos.logo}>Primeuan</h2>
                    <p>Desenvolvendo soluções digitais com excelência.</p>
                </div>

                <div className={estilos.container_info}>
                    <div>
                        <h3>Contato</h3>
                        <ul className={estilos.ul_info} id={estilos.contato}>
                            <li><a href="mailto:contato@kauanafonso.com">Email: contato@kauanafonso.com</a></li>
                            <li><a href="tel:+5501999999999">Telefone: (19) 99999-9999</a></li>
                            <li>Endereço: Rua Senai Antunes 201, Campinas - SP</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Redes Sociais</h3>
                        <ul className={estilos.ul_info}>
                            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Copy />
        </footer>
    );
}
