import { makeObservable, observable } from "mobx";

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";

  constructor() {
    makeObservable(this, {
      nome: observable,
      renda: observable,
      objetivoFinanceiro: observable,
    });
  }
}

export const usuarioStore = new UsuarioStore();
