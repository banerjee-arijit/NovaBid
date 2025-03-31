import { create } from "zustand";
import { supabase } from "@/lib/supabase";

const useUserStore = create((set) => ({
  user: null,
  fetchSession: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    set({ user: session?.user || null });
    return session?.user;
  },
}));

export default useUserStore;
