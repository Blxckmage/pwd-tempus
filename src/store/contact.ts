import { create } from "zustand";

interface ContactStore {
	name: string;
	email: string;
	text: string;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setText: (text: string) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
	name: "",
	email: "",
	text: "",
	setName: (name: string) => set((state) => ({ ...state, name })),
	setEmail: (email: string) => set((state) => ({ ...state, email })),
	setText: (text: string) => set((state) => ({ ...state, text })),
}));
