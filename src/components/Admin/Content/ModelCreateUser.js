import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { AiFillPlusCircle } from "react-icons/ai";
import { postCreateNewUser } from '../../../services/apiServices'
import { ToastContainer, toast } from 'react-toastify';



const ModelCreateUser = ({ show, setShow, fetchUsers }) => {

    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setUserName('')
        setImage('')
        setRole('USER')
        setPreviewImage('')
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState("")

    const handleSubmit = async () => {

        const isValidEmail = validateEmail(email)

        if (!isValidEmail) {
            toast.error('Invalid Email');
            return;
        }

        if (!password) {
            toast.error('Invalid Password');
            return;
        }
        const data = await postCreateNewUser(email, password, userName, role, image)

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose()
            await fetchUsers()
        }


        if (data && data.EC !== 0) {
            toast.error(data.EM);
            return;
        }




    }

    const handleUpLoadImage = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            setPreviewImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl' backdrop='static'
                className='model-add-user'
            >

                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputUsername" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">Role</label>
                            <select
                                id="inputState"
                                className="form-select"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option defaultValue value="USER">USERS</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputImage" className="form-label label-upload">
                                <AiFillPlusCircle />
                                Upload file image
                            </label>
                            <input
                                type="file"
                                hidden
                                id='inputImage'
                                onChange={(e) => handleUpLoadImage(e)}
                            />
                        </div>

                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                (<img src={previewImage} alt='preview' className="img-preview" />)
                                :
                                (<div id='inputImage'>Preview image</div>)
                            }

                        </div>
                    </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelCreateUser