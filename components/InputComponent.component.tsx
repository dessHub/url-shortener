import { Colors } from '@/ui';
import React from 'react';
import Styled from './InputComponent.styled';

export type InboxInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  BgColor?: string;
  placeholder: string;
  placeholderColor?: string;
  ButtonColor?: string;
  TColor?: string;
  loading?: boolean;
  handleSave: () => void;
  isError?: boolean;
};

const InboxInput = ({
  TColor,
  placeholder,
  BgColor,
  ButtonColor,
  loading,
  handleSave,
  isError,
  ...props
}: InboxInputProps) => {
  return (
    <Styled.InputContainer>
      <Styled.Input
        type="text"
        {...props}
        style={{ backgroundColor: BgColor, color: TColor, border: isError ? `1px solid ${Colors.warning}` : `1px solid ${Colors.white}`}}
        placeholder={placeholder}
      />
      <button onClick={handleSave} style={{ backgroundColor: ButtonColor }}>
        {loading === true ? (
          'Shortening....'
        ) : (
          'Shorten'
        )}
      </button>
    </Styled.InputContainer>
  );
};

export default InboxInput;
