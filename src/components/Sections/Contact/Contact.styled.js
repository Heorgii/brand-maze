import styled from "styled-components";

const ContactForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Manrope";
  font-style: normal;
  width: 1210px;
  min-height: 441px;
  overflow: hidden;
`;

const LabelOfItem = styled.label`
  font-weight: 600;
  font-size: 11px;
  line-height: 1.36;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: calc(100% / 2);
  color: rgba(157, 164, 189, 0.4);
  cursor: pointer;
`;

const InputOfItem = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  width: calc(100% / 2);
  color: rgba(157, 164, 189, 0.4);
  cursor: pointer;
  padding-top: 10px;
`;
const TextareaOfItem = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  width: calc(100%);
  color: rgba(157, 164, 189, 0.4);
  cursor: pointer;
`;
export { ContactForm, LabelOfItem, InputOfItem, TextareaOfItem };
