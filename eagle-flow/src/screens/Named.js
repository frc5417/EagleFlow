import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../components/Menu';
import { NewCommandModal } from '../components/NewCommandModal';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import '../styles/Named.css';

export function Named() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commands, setCommands] = useState([]);

  const handleCreateCommand = (commandName) => {
    if (!commandName.trim()) {
      alert('Please enter a valid Command Name.');
      return;
    }

    const newCommand = {
      id: Date.now(),
      name: commandName
    };

    setCommands([...commands, newCommand]);
    setIsModalOpen(false);
  };

  return (
    <div className='backgroundContainer'>
      <Menu navigate = {navigate} />

      <div className='namedContainer'>
        <h1 className = 'title'> Named Commands </h1>
    
        <button className = 'newCommandButton' onClick = {() => setIsModalOpen(true)}> Create New Command </button>

        <NewCommandModal 
          isOpen = {isModalOpen}
          onClose = {() => setIsModalOpen(false)}
          onCreate = {handleCreateCommand}
        />

        <SimpleBar style = {{maxHeight: '72.5vh'}}>
          {commands.map((command) => (
            <div key={command.id} className="commandContainer">
              <h2 className="commandText">{command.name}</h2>
            </div>
          ))}

          <div className = 'commandContainer'>
            <h2 className = 'commandText'> Intake Note </h2>
          </div>

          <div className = 'commandContainer'>
            <h2 className = 'commandText'> Shooter Angle </h2>
          </div>

          <div className = 'commandContainer'>
            <h2 className = 'commandText'> Elevator Commands</h2>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
}