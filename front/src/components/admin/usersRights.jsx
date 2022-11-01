import React, { useState } from "react"
import { useEffect } from "react"
import instance from "../../utils/instanceHttp"

export const UsersRights = (props) => {
    const [users, setUsers] = useState([]);
    const [emailTrue, setEmailTrue] = useState([]);
    const [emailFalse, setEmailFalse] = useState([]);
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        instance
            .get("/admin/getUsers")
            .then((res) => {
                setUsers(res.data.users);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        instance
            .post("/admin/searchUser", {'search': search})
            .then((res) => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [search]);

    const handleAdminChange = (e) => {
        const ID = e.target.attributes.tr_id.value;
        const newUsers = users.map((user, index) => {
            if(index.toString() === ID){
                if(!user.admin === true){
                    setEmailTrue([...emailTrue, user.email])

                    const NewEmailFalse = emailFalse.filter((email) => {
                        if(user.email !== email){
                            return email
                        }
                        return null
                    })
                    setEmailFalse(NewEmailFalse)
                } else {
                    setEmailFalse([...emailFalse, user.email])

                    const NewEmailTrue = emailTrue.filter((email) => {
                        if(user.email !== email){
                            return email
                        }
                        return null
                    })
                    setEmailTrue(NewEmailTrue)
                }

                return {...user, admin: !user.admin}
            }
            return user;
        });
        setUsers(newUsers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRights = {
            "emailTrue": emailTrue,
            "emailFalse": emailFalse,
        }

        instance
            .post("editUser", newRights)
            .then((res) => {
                setMessage(res.data);
            })
            .catch(err => {
                console.log(err.responsa.data);
            })
    }

    return (
        <React.Fragment>
            <h2>Users Rights</h2>
            <p>{message}</p>
            <label htrmlfor="user-search">
                Search an user :
                <input type="search" name="user-search" onChange={handleSearchChange}></input>
            </label>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {                       
                            return <tr key={index} tr_id={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <input tr_id={index} name="admin" type="checkbox" checked={users[index].admin} onChange={handleAdminChange}/>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <input type="submit" value="Change rights" onClick={() => {return window.confirm('Are you sure?')}} />
            </form>
        </React.Fragment>
    )
}