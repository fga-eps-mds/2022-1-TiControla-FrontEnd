export type Usuario = {
    id: string,
    nome: string,
    email: string,
    senha: string,
    saldo: number,
    limiteMaximo?: number,
    limiteDisponivel: number,
    totalDasFaturas?: number
}