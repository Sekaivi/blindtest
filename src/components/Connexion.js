'use client';

import { useAuth } from "@/stores/authContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Connexion({ children }) {
    const { user } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const isLoginPage = pathname === "/login";

    useEffect(() => {
        if (!user && !isLoginPage) {
            router.replace("/login");
        }
    }, [user, pathname]);

    if (!user && !isLoginPage) return null;

    return <>{children}</>;
}
