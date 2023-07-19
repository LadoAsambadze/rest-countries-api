import { create, StoreApi } from "zustand";

interface Data {
  name: {
    common: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string;
}

interface DataStore {
  data: Data[];
  setData: (newData: Data[]) => void;
}

const useData = create<DataStore>((set: StoreApi<DataStore>[`setState`]) => ({
  data: [],
  setData: (newData: Data[]) => set(() => ({ data: newData })),
}));

export default useData;
