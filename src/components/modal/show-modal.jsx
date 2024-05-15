import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ShowModal() {
  const [openModal, setOpenModal] = useState(false);

  function handleModalToggle() {
    setOpenModal(!openModal);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div>
      <button className="button" onClick={handleModalToggle}>
        Open Modal
      </button>
      {openModal && (
        <Modal
          onClose={closeModal}
          header={<div>What is Angular?</div>}
          body={
            <div>
              Angular is an open-source web application development framework
              created by Google. It is used to build front-end and single-page
              applications that run on JavaScript. It is a full-fledged
              framework, i.e, it takes care of many aspects of front–end web
              applications such as HTTP requests, routing, layout, forms,
              reactivity, validation, etc.
            </div>
          }
          footer={<h3>Next Question</h3>}
        />
      )}
    </div>
  );
}
