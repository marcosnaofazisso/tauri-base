import styled, { css } from "styled-components";
import { background } from "../../globalStyles";
import { slideAnimation } from "../../globalAnimations";

export const MusicPlayerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;

  width: 100%;

  height: 100%;
  max-height: 50px;
  padding: 2px 0px;
`;


export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 500px;

  .displayNameMp3 {
    margin: 0;
    font-family: "Press-Start";
    font-size: 16px;
    color: ${background.blackLight};
    display: inline-block;
    ${(props) => props.isPlaying && css` animation: ${slideAnimation} 18s linear infinite;`}    
    white-space: nowrap; 
  }
`;

export const SongTitleSlider = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden; 
    white-space: nowrap;
    box-sizing: border-box;
    padding: 5px 0;
`;

export const ProgressBar = styled.div`
  overflow: hidden;
  height: 8px;
  background: ${background.beigeLight};
  border-radius: 4px;
  margin: 10px 0;
  
  width: 100%;

  div {
    height: 100%;
    background: ${background.blackLight}; 
    transition: width 0.3s ease;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 150px;

  .icon {
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #333;
    
    &:hover {
        color: ${background.green};
        background-color: ${background.blackLight};
    }
}

`;
