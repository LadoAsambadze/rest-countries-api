import { create, StoreApi } from "zustand";

interface ModeStore {
  mode: boolean;
  setMode: (newMode: boolean) => void;
}

const useModeStore = create<ModeStore>(
  (set: StoreApi<ModeStore>[`setState`]) => ({
    mode: false,
    setMode: (newMode: boolean) => set(() => ({ mode: newMode })),
  })
);
export default useModeStore;
