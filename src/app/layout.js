// src/app/layout.js
import { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/stores/authContext";
import Connexion from "@/components/Connexion";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blindtest Maker",
    description: "Votre nouvel outil préféré pour faire des blindtests !",
};
 
export const viewport = {
    colorScheme: "light",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="min-h-screen flex flex-col bg-(--background) scrollbar-gutter-stable">
                <AuthProvider>
                    <Nav />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}


