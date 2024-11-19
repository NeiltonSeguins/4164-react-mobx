import { autorun, makeAutoObservable } from "mobx";

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
  objetivosTipos = {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  };

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      const userState = {
        nome: this.nome,
        renda: this.renda,
        objetivoFinanceiro: this.objetivoFinanceiro,
        orcamentoDiario: this.orcamentoDiario,
      };

      localStorage.setItem("usuario", JSON.stringify(userState));
    });
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

  get objetivoFinanceiroAtual() {
    if (!this.objetivosTipos[this.objetivoFinanceiro]) {
      return null;
    }

    return this.objetivosTipos[this.objetivoFinanceiro];
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
