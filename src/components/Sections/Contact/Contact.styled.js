import styled from "styled-components";

const ContactForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  width: 600px;
  overflow: hidden;
  padding: 20px 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 300px;
  }
`;

const LabelOfItem = styled.label`
  font-weight: 600;
  font-size: 11px;
  line-height: 1.36;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: calc(100% / 2);
  color: rgba(157, 164, 189, 0.6);
  cursor: pointer;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: calc(100%);
  }
`;

const InputOfItem = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  width: calc(100% / 2);
  color: rgba(100, 100, 100, 0.9);
  cursor: pointer;
  padding-top: 10px;
  min-width: 250px;
  @media screen and (max-width: 768px) {
    width: calc(100%);
  }
`;
const TextareaOfItem = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  width: calc(100%);
  color: rgba(100, 100, 100, 0.9);
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Roboto", sans-serif;
  font-style: normal;
`;
const ContainerForInputForFile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const InputForFile = styled.input`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  display: block;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #000;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 10px;
  }
`;
const LabelForInputForFile = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  font-size: 1em;
  transition: all 0.4s;
  cursor: pointer;
  width: 156px;
  height: 40px;
  margin: 0 auto;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 10px;
  }
`;

const Button = styled.button`
  width: 156px;
  height: 40px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #000;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 10px;
  }
`;

export {
  ContactForm,
  LabelOfItem,
  InputOfItem,
  TextareaOfItem,
  ButtonContainer,
  InputForFile,
  Button,
  ContainerForInputForFile,
  LabelForInputForFile,
};
