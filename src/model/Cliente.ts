import { log } from "console";

export let rl = require("readline-sync"); 


export class Evento {
    private id_evento: number; 
    public nome: string;
    public descricrao: string;
    public data: string;
    public hora_inicio: string;
    public hora_fim: string;
    public local: string;
    public preco_ingresso: number;
    public capacidade_maxima: number;
    armazenaEvento: Evento[] = []

    constructor(id_evento: number, nome: string, descricao: string, data: string, hora_inicio: string, hora_fim: string, local: string, preco_ingresso: number, capacidade_maxima: number){
        this.id_evento = id_evento;
        this.nome = nome;
        this.descricrao = descricao;
        this.data = data;
        this.hora_inicio = hora_inicio;
        this.hora_fim = hora_fim;
        this.local = local;
        this.preco_ingresso = preco_ingresso;
        this.capacidade_maxima = capacidade_maxima;

    }

    public criarEvento(): Evento{
        let id_eventoUP = rl.questionInt("Insira o ID do Evento: ")
        let nomeUP = rl.question("Insira o Nome do Evento:  ")
        let descricaoUP = rl.question("Insira a Descricao do Evento:  ")
        let dataUp = rl.question("Insira a Data do Evento:  ")
        let hora_inicioUP = rl.questionInt("Insira a Hora de Inicio do Evento: ")
        let hora_fimUP = rl.questionInt("Insira a Hora de Termino do Evento:  ")
        let localUP = rl.question("Insira o Local do Evento:  ")
        // Logica dos ingressos
        let capacidade_maximaUP = rl.questionInt("Inisra a Capacidade Maxima do Evento: ")
        const eventoCriado = new Evento(id_eventoUP,nomeUP,descricaoUP,dataUp,hora_inicioUP,hora_fimUP,localUP,this.preco_ingresso,capacidade_maximaUP)
        return eventoCriado
    }

    public editarEvento(id: number, novosDados: Partial<Evento>): void {
        // Verifica se o array de eventos está vazio
        if (this.armazenaEvento.length === 0) {
            console.log("Não há eventos cadastrados no sistema.");
            return;
        } 

        // Encontra o índice do evento que precisa ser editado
        // findIndex para localizar o índice do evento que corresponde ao id fornecido
        const index = this.armazenaEvento.findIndex(evento => evento.id_evento === id); 

        if(index === -1){ // Se o evento não for encontrado (índice é -1) 
            console.log("Evento Invalído. Tente Novamente.");
            return;
        }
        console.log("Evento atualizado com sucesso.");
    }

    public removerEvento(): void{}
    public vizualizarEvento(): void{}
    public admIngressos(): void{} 
}