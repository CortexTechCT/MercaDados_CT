import React from "react";
import "./LeituraProdutos.css";
import { Botao } from "../../components/botao/Botao";
import Header from "../../components/header/Header";
import Doritos from "../../assets/Doritos.png";

export const LeituraProdutos = () => {
  return (
    <div className="leitura-container">
      {/* Header */}
<<<<<<< HEAD
      <Header />

      {/* Fundo azul */}
=======
      <header className="header">
        <img src={casa} alt="Home" className="icon" />
        <div className="header-icons">  
          <img src={perfil} alt="Perfil" className="icon" />
        </div>
<<<<<<< HEAD

        <div className="header-right">

         </div>
      </header>     

=======



        <div className="header-right">



         </div>
      </header>     


        </div>

      </header>

>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3

      {/* Quadrado azul principal */}
>>>>>>> f5c072692021760268630caf0d25aa32dd99e7c8
      <div className="fundo-azul">
        <div className="conteudo">
          {/* Produtos */}
          <div className="produtos">
            <img src={Doritos} alt="Doritos" className="produto-img" />
          </div>

          {/* Tabela */}
          <div className="tabela">
            <h2 className="titulo">Registro Atual</h2>
            <h3 className="subtitulo">12x Caixa de Energético</h3>

            <table className="tabela-dados">
              <thead>
                <tr>
                  <th>Quantidade</th>
                  <th></th>
                  <th>Preço unitário</th>
                  <th></th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12x</td>
                  <td>x</td>
                  <td>R$9,49</td>
                  <td>=</td>
                  <td><b>R$113,99</b></td>
                </tr>
              </tbody>
            </table>

            <div className="itens-cupom">
              <h4>Itens do Cupom</h4>
              <table className="tabela-itens">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Qtd:</th>
                    <th>Preço Unitário:</th>
                    <th>Total:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Doritos 300g</td>
                    <td>1 un</td>
                    <td>R$ 8,99</td>
                    <td>R$ 8,99</td>
                  </tr>
                  </tbody>

                  <tbody>
                  <tr>
                    <td>Caixa de Energético Monster</td>
                    <td>12 un</td>
                    <td>R$ 9,49</td>
                    <td>R$ 113,99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="atendido">Atendido por: xxxxx</p>

            <div className="resumo">
              <p>Desconto = R$0,00</p>
              <div className="total">R$ 122,87</div>
            </div>

            <Botao nomeBotao="continuar" />
          </div>
        </div>
      </div>
    </div>
  );
};
