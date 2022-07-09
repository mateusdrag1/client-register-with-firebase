import Button from '@/components/Button';
import Card from '@/components/Card';
import Forms from '@/components/Forms';
import Table from '@/components/Table';
import useClients from '@/hooks/useClients';

const Home = () => {
  const {
    clientDeleted,
    clientSelected,
    newClient,
    saveClient,
    client,
    clients,
    tableVisible,
    toggleTable,
  } = useClients();

  return (
    <div className='flex justify-center items-center'>
      <Card title='Cadastro de pessoas'>
        {tableVisible ? (
          <>
            <div className='flex justify-end pb-3'>
              <Button color='blue' onClick={newClient}>
                Criar novo cliente
              </Button>
            </div>

            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Forms
            onCancel={() => toggleTable()}
            onSave={saveClient}
            client={client}
          />
        )}
      </Card>
    </div>
  );
};

export default Home;
