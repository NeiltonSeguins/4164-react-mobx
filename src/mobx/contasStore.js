import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class ContasStore {
  contas = [];

  constructor() {
    makeAutoObservable(this);
  }

  adicionarConta(contas) {
    this.contas.push({ id: uuidv4(), ...contas });
  }
}

export const contasStore = new ContasStore();
