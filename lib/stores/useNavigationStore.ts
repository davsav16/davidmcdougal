import { create } from "zustand";

type NavigationStore = {
  /** Whether the mobile menu overlay is showing. */
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));
