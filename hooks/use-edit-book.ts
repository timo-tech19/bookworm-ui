import { create } from "zustand";

type EditBookModal = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const useEditBook = create<EditBookModal>((set) => ({
  isOpen: false,
  setIsOpen: (open: boolean) => set({ isOpen: open }),
}));
