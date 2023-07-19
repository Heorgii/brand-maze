import ReactDOM from "react-dom";
import {BackDrop, ItemContainer} from "./ModalWindow.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { closeModalWindow } from "hooks/ModalWindow";
import ReactPlayer from 'react-player';
import video from '../../images/video/IMG_4775.MOV'

export const ModalWindow = () => {
  
    function closeModal(e) {
        e.preventDefault();
        closeModalWindow(e);
      }

    return ReactDOM.createPortal(
        <BackDrop onClick={closeModal}>
          <ItemContainer
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{display:"flex", justifyContent:"center", alignItems:"start", margin:"20px 0"}}>
                <ReactPlayer url={video} playing={true} controls  width="600px" height="400px"/>
                <AiFillCloseCircle
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
              </AiFillCloseCircle>
            </div>
            </ItemContainer>
            </BackDrop>, 
    document.querySelector("#popup-root")
  );
}