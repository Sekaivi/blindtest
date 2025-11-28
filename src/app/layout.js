// src/app/layout.js
import "./globals.css";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/stores/authContext";
import Connexion from "@/components/Connexion";

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <AuthProvider>
                    <Nav />
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}


