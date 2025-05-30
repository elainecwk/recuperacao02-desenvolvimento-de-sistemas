"use client";
import { Checkbox } from "@mui/material";
import styles from "./styles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

type Dev = {
    id: string;
    name:string;
    tech: string[];
    description: string;
    avatarUrl: string;
    githubUrl: string;
  }

type DevsProps = {
    id: string;
    developers: Text;
    handleRemoveItem: (event: any, id: string) => void;
    handleUpdateItem: (event: any, id: string, boolean: boolean) => void;
};

export default function developer({
    id,
    developers,
    handleRemoveItem,
    handleUpdateItem,
}:DevsProps ): any {
    const [check, setCheck] = useState<Dev>();
    const [statu, setStatu] = useState<boolean>(false);

    useEffect(() => {
        status(id);
        checkChecked();
    }, []);

    async function status(id: string) {
        const response = await axios.get(`http://localhost:3001/itens/${id}`);
        setCheck(response.data);
    }

    const checkChecked = () => {
        check?.id ? setStatu(true) : setStatu(false);
    };

    return (
        
    );
}