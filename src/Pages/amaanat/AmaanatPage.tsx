import UserInfoTile from "@/components/user-info-tile/UserInfoTile";
import useFetchAmaanatData from "@/customHooks/useFetchAmaanatData";
import './amaanat-page.css'
import { useNavigate } from 'react-router-dom'

export default function AmaanatPage(): JSX.Element {

    const { amaanatUsers } = useFetchAmaanatData();

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is Amaanat Page</h1>
            <button>Sign Up User</button>
            <div className="amaanat-users">
                {amaanatUsers.map((user) => {
                    return (
                        <UserInfoTile {...user} key={user.ID}/>
                    )
                })}
            </div>
        </div>
    )
}