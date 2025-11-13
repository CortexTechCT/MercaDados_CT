import "./cadastroAdmin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Botao } from "../../components/botao/Botao.jsx";
import Swal from "sweetalert2";
import api from "../../services/Services.js";
import iconeCasa from '../../assets/casa.png';

export const CadastroAdmin = () => {
    const [usuario, setUsuario] = useState({
        nomeUsuario: "",
        email: "",
        senha: "",
        numero: "",
        cpf: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });

        // 🔢 Bloqueia letras nos campos numéricos
        if (name === "numero" || name === "cpf") {
            const somenteNumeros = value.replace(/\D/g, ""); // remove tudo que não for número
            setUsuario({ ...usuario, [name]: somenteNumeros });
        } else {
            setUsuario({ ...usuario, [name]: value });
        }
    }

    async function cadastrarAdmin(e) {
        e.preventDefault();

        try {
            const usuarioFormatado = {
                nomeUsuario: usuario.nomeUsuario,
                email: usuario.email,
                senha: usuario.senha,
                numero: usuario.numero,
                cpf: usuario.cpf,
                tipoUsuarioID: "662089a4-e183-434e-9161-08de22bbd771", // substitua pelo ID real de Admin
                tipoUsuario: {
                    tipoUsuarioID: "662089a4-e183-434e-9161-08de22bbd771",
                    tituloTipoUsuario: "Admin",
                },
            };

            console.log("➡️ Enviando para API:", usuarioFormatado);
            const resposta = await api.post("Usuario", usuarioFormatado);

            Swal.fire({
                icon: "success",
                title: "Administrador cadastrado com sucesso!",
                text: `Nome: ${resposta.data.nomeUsuario}`,
                confirmButtonColor: "#3085d6",
            });

            setUsuario({
                nomeUsuario: "",
                email: "",
                senha: "",
                numero: "",
                cpf: "",
            });
        } catch (error) {
            console.error("❌ Erro ao cadastrar:", error);
            console.log("📦 Resposta da API:", error.response?.data);
            Swal.fire({
                icon: "error",
                title: "Erro ao cadastrar!",
                text:
                    error.response?.data?.message ||
                    "Não foi possível realizar o cadastro.",
                confirmButtonColor: "#d33",
            });
        }
    }

    return (
        <div className="cadastro-admin-page">
            <div className="conteudo-principal">
                

                <main className="formulario-box-adminlogin">
                    <h2>Cadastro de Administrador</h2>

                    <form className="formulario-grid-adm" onSubmit={cadastrarAdmin}>
                        <input
                            type="text"
                            name="nomeUsuario"
                            placeholder="Nome completo"
                            value={usuario.nomeUsuario}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={usuario.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={usuario.senha}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="numero"
                            placeholder="Número de telefone"
                            value={usuario.numero}
                            onChange={handleChange}
                            maxLength="11"
                            required
                        />

                        <input
                            type="text"
                            name="cpf"
                            placeholder="CPF ou CNPJ"
                            value={usuario.cpf}
                            onChange={handleChange}
                            maxLength="14"
                            required
                        />

                        <div className="botao-container">
                            <Botao
                                nomeBotao="Cadastrar Administrador"
                                tipo="submit"
                                onClick={cadastrarAdmin}
                            />
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};
