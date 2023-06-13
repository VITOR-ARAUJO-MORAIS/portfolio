import './section3.css'
import React from 'react'

export default function section3(){

    return <section id="section3">

        <p id="section3-title">Meus Projetos</p>

        
        <div className='section3-data-back-end'>    
            <div id="section3-buttons">
                <button type="text" id='back-end-button'> Javascript </button>
            </div>
            <div id="my-projects-back">

                <div className='project-class-back'>
                    <p className='project-title'>Ecommerce para varejista</p>
                    <p className='project-text'>Nesse projeto foi feito um ecommerce  para uma varejista. Com um layout resposivo e dados de uma API para compor os produtos. <br></br> 
                    Tools: Javascript, CSS, React 
                    </p>
                    <a href='https://github.com/vitor-araujo-morais/teste-front-end-jr'>Link do Github</a>
                </div>    

                <div className='project-class-back'>
                    <p className='project-title'>Conversor de Moedas</p>
                    <p className='project-text'>Um simples conversor de moedas para real, nessa aplicação o usuário escolhe qual moeda ele deseja converter para real e o programa vai consultar uma API pública com as principais moedas disponíveis, além de converter ele também traz algumas outros dados sobre a moeda escolhida<br></br> 
                    Tools: JQuery, AJAX
                    </p>
                    <a href='https://github.com/VITOR-ARAUJO-MORAIS/Conversao_de_Moedas'>Link do Github</a>
                </div>    

                <div className='project-class-back'>
                    <p className='project-title'>Cadastro de conta</p>
                    <p className='project-text'>Um cadastro de conta que foi o primeiro projeto com o uso de rotas e outras páginas além do index, com possibilidade de cadastrar, logar e cadastrar dados bancários.  <br></br> 
                    Tools: Javascript, CSS, React, bootstrap
                    </p>
                    <a href='https://github.com/vitor-araujo-morais/projetoStartpn'>Link do Github</a>
                </div> 
                  
            </div>

        </div>

        <div className='section3-data-back-end'>    
            <div id="section3-buttons">
                <button>PHP</button>
            </div>
            <div id="my-projects-back">

                <div className='project-class-back'>
                    <p className='project-title-cc'>Pizzaria online</p>
                    <p className='project-text'>O projeto foi feito como um sistema para uma pizzaria online, incluindo a consulta, edição e remoção de dados no banco de dados. <br></br> 
                    Tools: PHP, MySQL
                    </p>
                    <a href='https://github.com/vitor-araujo-morais/pizzaria_online'>Link do Github</a>
                </div>      

            </div>
        </div>

    </section>

}