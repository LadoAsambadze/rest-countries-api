import { create, StoreApi } from "zustand";

interface ContentStore {
  content: string;
  setContent: (newContent: string) => void;
}

const useContent = create<ContentStore>(
  (set: StoreApi<ContentStore>[`setState`]) => ({
    content: "Filter by Regions(All)",
    setContent: (newContent: string) => set(() => ({ content: newContent })),
  })
);

export default useContent;
