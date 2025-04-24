import estilos from './Static_view.module.css';
import { Button, Button_Second } from './Button';


export function Static_view({ title, description, imgBackground } ) {
    return (
        <div className={estilos.imagem_main} style={{backgroundImage: `url(${imgBackground})`}}>
            <div className={estilos.div_shadow}>

                <div className={estilos.show_movie}>

                    <div>
                        <h2>{title}</h2>
                        <p>
                            {description}
                        </p>
                    </div>

                    <div className={estilos.div_btn_watch}>
                        <Button text={"Assistir"} />
                        <Button_Second text={"Assistir"} />
                    </div>

                </div>
            </div>
        </div>
    )
}
