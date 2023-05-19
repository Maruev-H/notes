import React, { FC, MouseEventHandler } from "react";
import './Button.scss'

interface IButton {
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<IButton> = ({ value, onClick }) => {
  return <button onClick={onClick} className="Change-btn large-text">{value}</button>;
};

export default Button;
