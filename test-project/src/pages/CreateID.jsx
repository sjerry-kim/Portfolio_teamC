import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebase";

const CreateID = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <input
                placeholder="Email"
                onChange={(e) => {
                    setRegisterEmail(e.target.value);
                }}
            />
            <input
                placeholder="EmailPassword"
                onChange={(e) => {
                    setRegisterPassword(e.target.value);
                }}
            />
            <button onClick={register}>CreateUser</button>
        </div>
    );
};
export default CreateID;