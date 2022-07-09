import { useState } from 'react';

const useToggleForm = () => {
  const [show, setShow] = useState<'table' | 'form'>('table');

  const toggleTable = () => setShow('table');
  const toggleForm = () => setShow('form');

  return {
    formVisible: show === 'form',
    tableVisible: show === 'table',
    toggleTable,
    toggleForm,
  };
};

export default useToggleForm;
