"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("eb0dc084-e00e-458b-bf19-143bc1cdfa34");
    }, []);

    return null;
}