import { makeAutoObservable } from "mobx";

const DIAS_DO_MES = 30;

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;

  constructor() {
    makeAutoObservable(this);
  }

  defineDadosUsuario({ nome, renda, objetivoFinanceiro }) {
    this.nome = nome;
    this.renda = renda;
    this.objetivoFinanceiro = objetivoFinanceiro;
    this.calculaOrcamentoDiario();
  }

  calculaOrcamentoDiario() {
    this.orcamentoDiario = Math.floor(this.renda / DIAS_DO_MES);
  }
}

export const usuarioStore = new UsuarioStore();
