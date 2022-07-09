import Client from '@/core/models/Client';

type TableProps = {
  clients?: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
};

const Table = ({ clients, clientSelected, clientDeleted }: TableProps) => {
  return (
    <table className='table-auto w-full'>
      <thead className='bg-gray-200'>
        <tr>
          <th className='px-4 py-2'>ID</th>
          <th className='px-4 py-2'>Nome</th>
          <th className='px-4 py-2'>Idade</th>
          <th className='px-4 py-2'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clients ? (
          clients.map(client => (
            <tr key={client.id} className='hover:bg-gray-100'>
              <td className='border px-4 py-2'>{client.id}</td>
              <td className='border px-4 py-2'>{client.name}</td>
              <td className='border px-4 py-2'>{client.age}</td>
              <td className='border px-4 py-2 space-x-3'>
                {clientSelected && (
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => clientSelected(client)}
                  >
                    Editar
                  </button>
                )}
                {clientDeleted && (
                  <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => clientDeleted(client)}
                  >
                    Excluir
                  </button>
                )}
                {!clientSelected &&
                  !clientDeleted &&
                  'Não há ações disponíveis'}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className='border px-4 py-2' colSpan={3}>
              Nenhum cliente cadastrado
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
