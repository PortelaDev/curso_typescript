function noReturns(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Caio',
  sobrenome: 'Portela',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturns('caio', 'Cesar');
pessoa.exibirNome();

export { pessoa };
