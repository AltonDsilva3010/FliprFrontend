import { useState , useEffect } from 'react';
import { Form, Button ,Image} from 'react-bootstrap';
import User from "../../assets/Images/User.png";
import "../../Style/Profile.css"
import axios from 'axios';
function ProfileForm() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState(null);
    const [user, setuser] = useState({
        name: "",
        email: "",
        image: ""
    })
    const [api, setApi] = useState(true);

    useEffect(() => {
        if(api){
            axios.get("http://localhost:3000/profile").then((response)=>{
        //     setuser(prev => ({
        //     ...prev,
            
        // }))
                console.log(response)
            })
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setuser(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const handleImageChange = (event) => {
        const { name } = event.target
        setuser(prev => ({
            ...prev,
            [name]: event.target.files[0]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the form data to the server
        console.log('Name:', name);
        console.log('Gender:', gender);
        console.log('Image:', image);
    };

    return (
        <div className='d-flex flex-column align-items-center profile-form'>
            <h2>Profile</h2>
            <hr />
            <Image src={User} className='user-profile'/>
            <Form onSubmit={handleSubmit} className='form'>

                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={handleChange}
                />

                <Form.Control
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleChange}
                >
                    
                </Form.Control>

                <Form.Group controlId="image">
                    <div className="d-flex">
                        <div className="mr-3">
                            {user.image ? (
                                <img src={URL.createObjectURL(user.image)} alt="Profile" height="80" />
                            ) : (
                                <div className="bg-secondary" style={{ height: '50px', width: '50px' , borderRadius: '50px' , marginRight: '10px'}}></div>
                            )}
                        </div>
                        <div>
                            <Form.Control type="file" accept="image/*" name="image" style={{ height: '37px', width: '340px' , marginTop: '8px'}} onChange={handleImageChange} />
                        </div>
                    </div>
                </Form.Group>

                <Button variant="primary" className='btn-submit' type="submit">
                    Save Profile
                </Button>
            </Form>
        </div>
    );
}

export default ProfileForm;
