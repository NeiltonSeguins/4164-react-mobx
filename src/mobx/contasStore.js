import { autorun, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class ContasStore {
  contas = [];

  constructor() {
    makeAutoObservable(this);
    this.#carregarDoLocalStorage();

    autorun(() => {
      localStorage.setItem("contas", JSON.stringify(this.contas));
    });
  }

  adicionarConta(contas) {
    this.contas.push({ id: uuidv4(), ...contas });
  }

  #carregarDoLocalStorage() {
    const dados = localStorage.getItem("contas");

    if (dados) {
      try {
        this.contas = JSON.parse(dados);
      } catch (error) {
        console.error("ContasStore: carregarDoLocalStorage", error);
      }
    }
  }
}

export const contasStore = new ContasStore();
