import React from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
  label: string;
}

const Button = ( {label}:ButtonProps) => {
  return <StyledButton>{label}</StyledButton>
}

export default Button;