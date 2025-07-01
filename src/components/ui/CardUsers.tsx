import { IUsers } from "../../types/IUsers"

interface Props {
    user: IUsers
}

export const CardUsers : React.FC <Props> = ({user}) => {
    


  return (
    
    //estilamos una carta individual, los bordes, la letra, etc
    <div className=" bg-blue-400 h-[350px] w-[300px] flex flex-col font-bold items-center justify-center gap-2 rounded-4xl border">
        <h2>{user.name}</h2>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <p>{user.address.street}</p>
    </div>
  )
}
