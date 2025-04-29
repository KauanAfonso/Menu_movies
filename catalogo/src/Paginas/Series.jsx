import { Serie } from '../componentes/Series';
import { Cabecalho } from '../componentes/Cabecalho';
import stranger_things from '../assets/stranger_things.jfif'

export function Series() {
    return (
    
    <>
        <Cabecalho
                imgBackground={stranger_things}
                title={'Stranger Things'}
                description={'é uma série ambientada na década de 1980, na cidade fictícia de Hawkins. A trama gira em torno do desaparecimento misterioso de um garoto e dos eventos paranormais que afetam a cidade. Um grupo de amigos enfrenta criaturas monstruosas, agências secretas do governo e aventuras em dimensões paralelas.'}
        />

        <main>
            <Serie/>
        </main>  
    </>
    );
}