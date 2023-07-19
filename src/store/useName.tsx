import { create, StoreApi } from "zustand";

interface NameStore {
  name: string;
  setName: (newName: string) => void;
}

const useName = create<NameStore>((set: StoreApi<NameStore>[`setState`]) => ({
  name: "",
  setName: (newName: string) => set(() => ({ name: newName })),
}));

export default useName;
