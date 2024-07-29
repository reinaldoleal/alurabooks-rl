import styled, { css } from 'styled-components';
import { AbBotaoProps } from '.';

export const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
  padding: 16px 32px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
  border: 2px solid #eb9b00;
  cursor: pointer;

  ${(props: AbBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;
