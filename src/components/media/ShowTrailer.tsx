"use client";

import { CSSTransition } from 'react-transition-group';
import TrailerPlayer from "./TrailerPlayer";
import ModalTrailer from "../UI/modal/ModalTrailer";
import useTrailer from "@/store/useTrailer";
import '@/styles/animate.css'

const ShowTrailer = () => {

    const {modalIsOpen, selectedVideoId} = useTrailer((state) => state)

    return (
        <div>
            <CSSTransition
                in={modalIsOpen}
                timeout={500}
                unmountOnExit
                classNames='fade'
            >
                <ModalTrailer>
                    <CSSTransition
                        in={modalIsOpen}
                        timeout={1000}
                        unmountOnExit
                        classNames='modal'
                    >
                        <TrailerPlayer videoId={selectedVideoId}/>
                    </CSSTransition>
                </ModalTrailer>
            </CSSTransition>
        </div>
    );
};

export default ShowTrailer;
