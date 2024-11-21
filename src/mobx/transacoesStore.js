import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class TransacoesStore {
  transacoes = [];

  constructor() {
    makeAutoObservable(this);
  }

  adicionarTransacao(transacao) {
    this.transacoes.push({ id: uuidv4(), ...transacao });
  }
}

export const transacoesStore = new TransacoesStore();
