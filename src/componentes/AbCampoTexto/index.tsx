import React from "react";
import styled from "styled-components";

const LabelEstilizado = styled.label`
    color: #000;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px
`

const InputEstilizado = styled.input`
    font-size: 16px;
    line-height: 24px;
    color: #002F52;
    padding: 8px 24px;
    border: 1px solid #002F52;
    border-radius: 45px;
    &:focus {
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
`

export interface AbCampoTextoProps {
    label: string;
    value: string;
    placeholder?: string; 
    type?: "text" | "email" | "password" | "date";
    onChange: (value: string) => void;
}

export const AbCampoTexto = ({label, value, placeholder, type = "text", onChange}: AbCampoTextoProps) => {
    return (
        <div>
            <LabelEstilizado>{label}</LabelEstilizado>
            <InputEstilizado value={value} type={type} placeholder={placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}/>
        </div>
    )
}