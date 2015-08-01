export class PersistedList {
  names: Array<string>;

  constructor(){
    this.names = localStorage.getItem("names") !== null ? JSON.parse(localStorage.getItem("names")) : [];
  }

  push(value: string): void{
    this.names.push(value);
  }

  get(): Array<string>{
    return this.names;
  }

  clear(): void {
    this.names = [];
    localStorage.removeItem("names");
  }

  persist(): void {
    localStorage.setItem("names", JSON.stringify(this.names));
  }
}
