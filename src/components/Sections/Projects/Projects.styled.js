import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-style: normal;
  width: 90%;
  min-height: 441px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`;

export { SlideContainer };
