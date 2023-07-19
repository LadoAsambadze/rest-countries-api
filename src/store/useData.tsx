import { create, StoreApi } from "zustand";

interface Data {
  flags: {
    png: string;
    alt: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
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
