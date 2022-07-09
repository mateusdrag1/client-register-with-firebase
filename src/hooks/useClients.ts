import Client from '@/core/models/Client';
import ClientRepository from '@/core/repository/clientRepository';
import { useEffect, useState } from 'react';
import useToggle from './useToggleForm';

const useClients = () => {
  const repository: ClientRepository = new ClientRepository();

  const { tableVisible, toggleForm, toggleTable } = useToggle();

  const [clients, setClients] = useState<Client[]>([]);

  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    getAllClients();
  }, []);

  async function getAllClients() {
    await repository.getAll().then(clients => setClients(clients));

    toggleTable();
  }

  const clientSelected = (client: Client) => {
    setClient(client);

    toggleForm();
  };

  const clientDeleted = async (client: Client) => {
    await repository.delete(client.id);
    await getAllClients();
  };

  const saveClient = async (client: Client) => {
    if (client.id) {
      await repository.update(client);
      await getAllClients();
      return;
    }
    await repository.create(client);
    await getAllClients();
  };

  const newClient = () => {
    setClient(Client.empty());
    toggleForm();
  };

  return {
    newClient,
    clientSelected,
    clientDeleted,
    saveClient,
    getAllClients,
    clients,
    client,
    tableVisible,
    toggleTable,
  };
};

export default useClients;
