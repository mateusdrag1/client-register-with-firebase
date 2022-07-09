import Client from '@/core/models/Client';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from './input';

type FormsProps = {
  client?: Client;
  onSave?: (client: Client) => void;
  onCancel?: () => void;
};
const Forms = ({ client, onCancel, onSave }: FormsProps) => {
  const id = client?.id;
  const [name, setName] = useState(client?.name);
  const [age, setAge] = useState(client?.age);

  return (
    <div className='flex flex-col space-y-3 mt-4'>
      {id ? (
        <Input label='ID' name='id' type='text' value={id} readonly />
      ) : null}
      <Input
        label='Nome'
        name='name'
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        label='Idade'
        name='age'
        type='number'
        value={age}
        onChange={e => setAge(+e.target.value)}
      />

      <div className='flex space-x-2 justify-end'>
        <Button
          color='green'
          onClick={() => {
            client.id && onSave(new Client(id, name, age));
            !client.id && onSave(new Client(null, name, age));
          }}
        >
          {id ? 'Atualizar' : 'Cadastrar'}
        </Button>
        <Button color='red' onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default Forms;
