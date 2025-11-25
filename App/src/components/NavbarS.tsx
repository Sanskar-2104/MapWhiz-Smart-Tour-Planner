// components/Navbar/NavbarServer.tsx
import { cookies } from "next/headers";
import NavbarClient from "./Navbar";

export default function NavbarServer() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const isAuthenticated = !!token;

  return <NavbarClient isAuthenticated={isAuthenticated} />;
}
