
import './App.css'
import React, { useState } from 'react';
import Modal from './modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      
    <div className="App">
      <h1>Naija Ludo</h1>
      <button className='modal-button' onClick={openModal}>Start</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className='modal-head'>Start</h2>
          <button className='modal-content1'>You & Computer</button>
          <button className='modal-content1'>Tournament</button>
          <button className='modal-content1'>Multiplayer</button>
      </Modal>
      </div>
      
</>

  )
}

export default App;