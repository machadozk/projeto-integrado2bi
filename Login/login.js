/* validar uma tela de login */

function validarLogin() {
  const username = document.getElementById("login").value;
  const password = document.getElementById("senha").value;

  if (username === "PessoaFisica" && password === "123456") {
    window.location.href = "../PessoaFisica/pag_home_pf.html";
  } else if (username === "EmpresaSocial" && password === "123456") {
    window.location.href = "../tela_home_empresa_AcaoSocial/home_empresa.html";
  } else if (username === "EmpresaColeta" && password === "123456") {
    window.location.href = "../EmpresaColeta/coletas.html";
  } else {
    alert("Login ou senha incorretos. Tente novamente.");
  }
}