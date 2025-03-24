import ModelCreateUser from './ModelCreateUser'

const ManageUser = () => {
    return (
        <div>
            <div className="manage-user-container">
                <div className="title">Manage User</div>
                <div className="users-content">
                    <div>
                        <button>Add new user</button>
                    </div>
                    <div>
                        Table user
                        <ModelCreateUser />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;