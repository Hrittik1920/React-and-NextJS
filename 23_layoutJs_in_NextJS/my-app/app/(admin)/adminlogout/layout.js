import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logout Admin:  Facebook - Connect with the world",
  description: "Admin Page: This is the facebook and u can edit it because u r the admin.",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span>Logout Navbar for admin</span>
        {children}
    </>
  );
}