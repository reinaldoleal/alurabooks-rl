import React from "react";
import {TagEstilizado} from './AbTag.styled';

export const AbTag = ({texto} : {texto: string}) => {
    return (
        <TagEstilizado>
            {texto}
        </TagEstilizado>
    )
} 