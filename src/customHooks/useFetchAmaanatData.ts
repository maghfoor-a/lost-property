import { getAmaanatUsers } from "@/IPC/IPCMessages.amaanat";
import { AmaanatUserType } from "@/type-definitions/types.amaanat";
import { useEffect, useState } from "react";

export default function useFetchAmaanatData() {
    const [amaanatUsers, setAmaanatUsers] = useState<AmaanatUserType[]>([]);

    useEffect(() => {
        handleGetAmaanatUsers();
    }, [])

    async function handleGetAmaanatUsers() {
        const response = await getAmaanatUsers()
        setAmaanatUsers(response)
    };



    return { amaanatUsers, handleGetAmaanatUsers };
}