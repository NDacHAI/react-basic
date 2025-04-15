import axios from "axios";
const TableUser = ({ listUsers }) => {


    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">User name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">View</button>
                                <button className="btn btn-sm btn-warning mx-2">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>

                            </td>
                        </tr>
                    ))}
                    {listUsers && listUsers.length === 0 && <tr><td colSpan='5'>Not found data</td></tr>}

                </tbody>
            </table>
        </>
    );
}

export default TableUser;