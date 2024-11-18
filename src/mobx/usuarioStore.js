import { action, makeObservable, observable } from "mobx";

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";

  constructor() {
    makeObservable(this, {
      nome: observable,
      renda: observable,
      objetivoFinanceiro: observable,
      defineDadosUsuario: action,
    });
  }

  defineDadosUsuario({ nome, renda, objetivoFinanceiro }) {
    this.nome = nome;
    this.renda = renda;
    this.objetivoFinanceiro = objetivoFinanceiro;
  }
}

export const usuarioStore = new UsuarioStore();
