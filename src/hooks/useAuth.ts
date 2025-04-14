import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    accessToken: session?.accessToken,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
    signIn: (email: string, password: string) =>
      signIn("credentials", {
        email,
        password,
        redirect: false,
      }),
    signOut: () => signOut({ redirect: false }),
  };
}; 