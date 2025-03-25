import ModelCreateUser from './ModelCreateUser'
import './ManageUser.scss'
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from 'react';


const ManageUser = (props) => {

    const [showModelCreateUser, setShowModelCreateUser] = useState(false);

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
                    Table user
                </div>
                <ModelCreateUser
                    show={showModelCreateUser}
                    setShow={setShowModelCreateUser}
                />
            </div>
        </div>
    );
}

export default ManageUser;