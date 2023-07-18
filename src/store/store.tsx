import { createStore } from "zustand/vanilla";

interface ActiveStore {
  active: boolean;
  setActive: (newActive: boolean) => void;
}

export const useActive = createStore<ActiveStore>((set) => ({
  active: false,
  setActive: (newActive: boolean) => set(() => ({ active: newActive })),
}));

interface ContentStore {
  content: string;
  setContent: (newContent: string) => void;
}

export const useContent = createStore<ContentStore>((set) => ({
  content: "Filter by Regions(All)",
  setContent: (newContent: string) => set(() => ({ content: newContent })),
}));

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

export const useData = createStore<DataStore>((set) => ({
  data: [],
  setData: (newData: Data[]) => set(() => ({ data: newData })),
}));

interface ModeStore {
  mode: boolean;
  setMode: (newMode: boolean) => void;
}

export const useModeStore = createStore<ModeStore>((set) => ({
  mode: false,
  setMode: (newMode: boolean) => set(() => ({ mode: newMode })),
}));

interface NameStore {
  name: string;
  setName: (newName: string) => void;
}

export const useName = createStore<NameStore>((set) => ({
  name: "",
  setName: (newName: string) => set(() => ({ name: newName })),
}));
