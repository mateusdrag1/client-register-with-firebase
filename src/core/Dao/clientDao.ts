import Client from '../models/Client';

export default interface ClientDao {
  getAll(): Promise<Client[]>;
  getById(id: string): Promise<Client>;
  create(client: Client): Promise<Client>;
  update(client: Client): Promise<Client>;
  delete(id: string): Promise<void>;
}
