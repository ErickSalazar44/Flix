"use client";

import { CSSTransition } from 'react-transition-group';
import TrailerPlayer from "./TrailerPlayer";
import Modal from "../UI/modal/Modal";
import useTrailer from "@/store/useTrailer";
import '@/styles/animate.css'
import { useState } from 'react';

const ShowTrailer = () => {

    const {modalIsOpen, selectedVideoId, setModalIsOpen} = useTrailer((state) => state)


    return (
        <div>

            <CSSTransition
                in={modalIsOpen}
                timeout={500}
                unmountOnExit
                classNames='fade'
            >

                <Modal>
                    <CSSTransition
                        in={modalIsOpen}
                        timeout={1000}
                        unmountOnExit
                        classNames='modal'
                    >
                        <TrailerPlayer videoId={selectedVideoId}/>
                    </CSSTransition>
                </Modal>
            </CSSTransition>


        </div>
    );
};

export default ShowTrailer;
