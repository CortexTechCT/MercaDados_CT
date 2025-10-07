import "./Registro.css"
import { Botao } from "../../components/botao/Botao"
import Doritos from "../../assets/Doritos.png"
import Monster from "../../assets/Monster.png"

export const Registro = () => {
    return (
        <div className="registro-container">
            <div className="produtos">
                <img src={Doritos} alt="Doritos" className="img-produto"/>
                <img src={Monster} alt="Monster" className="img-produto"/>
            </div>

            <div className="resumo">
                <h2>Registro Atual</h2>
                <h3>12x Caixa de Energético</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Quantidade</th>
                            <th>Preço Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12x</td>
                            <td>R$ 9,49</td>
                            <td><b>R$ 113,99</b></td>
                        </tr>
                    </tbody>
                </table>

                <h4>Itens do Cupom</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Qtd</th>
                            <th>Preço Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Doritos 300g</td>
                            <td>1</td>
                            <td>R$ 8,99</td>
                            <td>R$ 8,99</td>
                        </tr>
                        <tr>
                            <td>Caixa de Energético Monster</td>
                            <td>12</td>
                            <td>R$ 9,49</td>
                            <td>R$ 113,99</td>
                        </tr>
                    </tbody>
                </table>

                <p className="atendido">Atendido por: xxxx</p>

                <div className="total-final">
                    <p>Desconto = R$0,00</p>
                    <div className="valor-final">R$ 122,87</div>
                </div>

                <Botao nomeBotao="Continuar">Continuar</Botao>
            </div>
        </div>
    )
}