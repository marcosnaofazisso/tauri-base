import styled from "styled-components";
import { background } from "../../globalStyles";

const grid = '../../../src/assets/images/grid.png'

export const MainContainer = styled.main`
  background-color: ${background.beige};

  width: 100vw;
  height: 100vh;

  padding: 30px;

  box-shadow: 
    inset 5px 5px 8px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(255, 255, 255, 0.5);

  border: 1px solid ${background.beigeDark}; 
`;
export const MainContentBorder = styled.div`
    background-color: ${background.blackLight};
    border-radius: 12px;
    padding: 30px;
    box-shadow: 
    inset 8px 8px 50px rgba(0, 0, 0, 0.4),  
    inset -5px -5px 10px rgba(0, 0, 0, 0.1);
`;

export const MainContent = styled.div`
    background-color: ${background.green};

    box-shadow: 
    inset 5px 5px 8px rgba(0, 0, 0, 0.2),  
    inset -5px -5px 10px rgba(0, 0, 0, 0.5),
    10px 10px 20px rgba(255, 1, 255, 0);

    padding: 0 3px;

  background-image: url(${grid}); 
  background-size: 100%;
  background-repeat: repeat;
  background-attachment: local; /* Optional */

`