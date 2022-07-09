import { db } from '@/services/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
  setDoc,
  SnapshotOptions,
} from 'firebase/firestore';

import ClientDao from '../Dao/clientDao';
import Client from '../models/Client';

export default class ClientRepository implements ClientDao {
  #transform = {
    toFirestore: (client: Client) => {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ) => {
      const dados = snapshot.data(options);
      return new Client(snapshot.id, dados.name, dados.age);
    },
  };

  #classCollection = collection(db, 'clients').withConverter(this.#transform);

  async getAll(): Promise<Client[]> {
    const clientsCollections = this.#classCollection;
    const clientsSnapshot = await getDocs(clientsCollections);
    const clientsList = clientsSnapshot.docs.map(doc => doc.data()) ?? [];
    return clientsList;
  }

  async getById(id: string): Promise<Client> {
    const docRef = doc(db, 'clients', id).withConverter(this.#transform);
    const document = await getDoc(docRef);
    return document.data();
  }

  async create(client: Client): Promise<Client> {
    const docRef = await addDoc(this.#classCollection, client);
    const doc = await getDoc(docRef);
    return doc.data();
  }

  async update(client: Client): Promise<Client> {
    await setDoc(
      doc(db, 'clients', client.id).withConverter(this.#transform),
      client
    );
    return client;
  }

  async delete(id: string): Promise<void> {
    return await deleteDoc(doc(db, 'clients', id));
  }
}
