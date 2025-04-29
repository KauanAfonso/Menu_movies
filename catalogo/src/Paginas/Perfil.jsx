import estilos from './Perfil.module.css';

export function Perfil() {

    const pessoas = [
        {
            nome: "Kauan Afonso",
            foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=200&h=200&crop=1",
          
        },

        {
          nome: "Kauan Afonso",
          foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=200&h=200&crop=1",
        
        },

        {

        nome: "Kauan Afonso",
        foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=200&h=200&crop=1",
      
        },

        {

          nome: "Kauan Afonso",
          foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=200&h=200&crop=1",
        
          },
          {

            nome: "Kauan Afonso",
            foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=200&h=200&crop=1",
          
            },
         
    ];
      

    return (
    <>
    <main className={estilos.container}>
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

  
        
    </main>  
    </>
    );
}