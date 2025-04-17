import estilos from './Footer.module.css';
import { Copy } from './copy';

export function Footer() {
    return (
        <>
            <footer>
            <div className={estilos.container}>
                <h1>Footer de Kauan Afonso</h1>

                <div className={estilos.container_info}>
                    <div>
                        <ul className={estilos.ul_info}>
                                <li><a href="">Contato</a></li>
                                <li><a href="">Telefone</a></li>
                                <li><a href="">Fale Conosco</a></li>
                                <li>Endereço: Rua Senai Antunes 201, Campinas</li>
                            </ul>
                    </div>

                    <div>
                        <ul className={estilos.ul_info}>
                                <li><a href="">Facebook</a></li>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">Linkedin</a></li>
                            </ul>
                    </div>
                
                    </div>
                </div>
            <Copy />
        </footer>
            
        
        </>
    )
}