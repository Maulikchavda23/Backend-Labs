"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const login = () => {
        const now = Date.now();
        const token = {
        value: "my-token",
        expiry: now + 60 * 60 * 1000, // 1 hour
        };
        document.cookie = `token=${JSON.stringify(token)}; path=/`;
        router.push("/lab24/dashboard");
    };

    return (
        <div style={{ padding: "40px" }}>
        <h1>Login Page</h1>
        <button onClick={login}>
            Login
        </button>
        </div>
    );
}