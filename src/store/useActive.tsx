import { create, StoreApi } from "zustand";

interface ActiveStore {
  active: boolean;
  setActive: (newActive: boolean) => void;
}

const useActive = create<ActiveStore>(
  (set: StoreApi<ActiveStore>[`setState`]) => ({
    active: false,
    setActive: (newActive: boolean) => set(() => ({ active: newActive })),
  })
);

export default useActive;
