import { jwtDecode } from "jwt-decode"; // use assim


export const userDecodeToken = (token) => {
  const decodificado = jwtDecode(token);

  return {
    idUsuario: decodificado.jti,
    token: token,
    tipoUsuario: decodificado.TituloTipoUsuario?.trim()
  };
};
