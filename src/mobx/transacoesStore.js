import { autorun, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class TransacoesStore {
  transacoes = [];

  constructor() {
    makeAutoObservable(this);
    this.#carregarDoLocalStorage();

    autorun(() => {
      localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
    });
  }

  adicionarTransacao(transacao) {
    this.transacoes.push({ id: uuidv4(), ...transacao });
  }

  #carregarDoLocalStorage() {
    const dados = localStorage.getItem("transacoes");

    if (dados) {
      try {
        this.transacoes = JSON.parse(dados);
      } catch (error) {
        console.error("TransacoesStore: carregarDoLocalStorage", error);
      }
    }
  }
}

export const transacoesStore = new TransacoesStore();
