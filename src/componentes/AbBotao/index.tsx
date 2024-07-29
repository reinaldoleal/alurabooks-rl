import React from "react";
import {BotaoEstilizado} from './AbBotao.styled';

export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClick?: () => void; 
}

export const AbBotao = ({texto, tipo = 'primario', onClick}: AbBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo}>
            {texto}
        </BotaoEstilizado>
    )
}