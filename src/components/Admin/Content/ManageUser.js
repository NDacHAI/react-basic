import ModelCreateUser from './ModelCreateUser'
import './ManageUser.scss'
import TableUser from './TableUser';
import { getAllUsers } from '../../../services/apiServices'

import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from 'react';


const ManageUser = (props) => {

    const [showModelCreateUser, setShowModelCreateUser] = useState(false);

    const [listUsers, setListUsers] = useState([

    ])



    const fetchUsers = async () => {
        const response = await getAllUsers()
        console.log(response)
        if (response.EC === 0) {
            setListUsers(response.DT)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button
                        className='btn btn-primary'
                        onClick={() => setShowModelCreateUser(true)}
                    >
                        <AiFillPlusCircle />
                        Add new user
                    </button>
                </div>
                <div className='table-users-container'>
                    <TableUser listUsers={listUsers} />
                </div>
                <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                    fetchUsers={fetchUsers}
                />
            </div>
        </div>
    );
}

export default ManageUser;