import { EstadoTarefa } from "./estado-tarefa";

export class Tarefa {

    keyReference: string;

    titulo: string;

    descricao?: string;

    state: EstadoTarefa;
}