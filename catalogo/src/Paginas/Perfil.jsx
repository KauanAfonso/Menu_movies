import estilos from './Perfil.module.css';

export function Perfil() {

    //informações de cada perfil
    const pessoas = [
        {
          nome: "Batman",
          foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=200&h=200&crop=1",
        },

        {
          nome: "Homem de Ferro",
          foto: "https://static.wixstatic.com/media/59d84c_f086715c72274680bdfcaa3064a5ba77~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,enc_avif,quality_auto/59d84c_f086715c72274680bdfcaa3064a5ba77~mv2.jpg",
        },
        {
          nome: "Superman",
          foto: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/GKGG3Q7GE5FOFH63PX4E5IHUDU.jpg?auth=e36437a616359e7b02351b18400734743cbc8329bb7683e02d9e5e5ba0a8dad1&width=592&height=594",
        },
        {
          nome: "Lanterna Verde",
          foto: "https://www.otempo.com.br/content/dam/otempo/editorias/entretenimento/filmes-e-series/2023/6/entretenimento-dc-confirma-que-o-lanterna-verde-e-o-pior-heroi-da-liga-da-justica-1708770695.jpeg", 
        },
         
    ];
      
    //retorna uma div com perfis que estão sendo iterados pelo map sobre
    //o array de pessoas, onde cada perfil é uma div com a imagem e o nome.
    return (
    <>
    <main >
    <div className={estilos.container}>
      <h2 className={estilos.meu_perfil}>Meus Perfis</h2>
        <div className={estilos.div_perfil}>
            {pessoas.map((pessoa)=>{
              return(
              <div className={estilos.div_imagem}>
                <img src={pessoa.foto} alt="imagem_perfil" />
                <div className={estilos.div_campo}>
                    <p>{pessoa.nome}</p>
                </div>
              </div>
              );
            })}
      </div>
    </div>
        
    </main>  
    </>
    );
}