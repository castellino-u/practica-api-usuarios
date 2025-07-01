import { useEffect, useState } from "react"
import { IUsers } from "../../types/IUsers"
import { getUsers } from "../../crud/crudUsers"
import { CardUsers } from "./CardUsers"



export const ListUsers = () => {


    const [users,setUsers] = useState<IUsers[]>([])
    useEffect(()=>{
        (async()=>{
            const response = await getUsers()
            setUsers(response)
        })()
    },
    [])

    return (
        //estilamos todas las cartas que aparecen, por eso podemos separar una de otra
    <div className="flex flex-wrap justify-center gap-8 mt-5">
        {
            users.map((usuario)=>(
                <CardUsers user={usuario}></CardUsers>
            ))
        }
    </div>
    )
}
