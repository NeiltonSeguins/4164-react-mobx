import { makeAutoObservable } from "mobx";

const DIAS_DO_MES = 30;

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;
  metas = {
    economizar: 0.2,
    investir: 0.15,
    "controlar-gastos": 0.8,
  };

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

  get progressoMeta() {
    if (!this.metas[this.objetivoFinanceiro]) {
      return 0;
    }

    const meta = this.renda * this.metas[this.objetivoFinanceiro];

    if (this.objetivoFinanceiro === "controlar-gastos") {
      return (((meta - this.orcamentoDiario) / meta) * 100).toFixed(2);
    }

    return ((this.orcamentoDiario / meta) * 100).toFixed(2);
  }
}

export const usuarioStore = new UsuarioStore();
