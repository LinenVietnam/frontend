'use client'
import { API } from "@/helper/API";
import { useRouter } from "next/navigation";
import { useState } from "react";

function QuanLy() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const changePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        fetch(`${API}/auth/login/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(res => {
                if(res){
                    localStorage.setItem("token", res.access_token);
                    fetch(`${API}/checkRole/`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json',
                            'Authorization': `${res.access_token}`,
                        },
                        body: JSON.stringify({})
                    }).then(res => res.json())
                        .then(res => {
                            if (res.message === 'success') {
                                router.push('/QuanLy/AddNewProduct')
                            } else {
                                router.push('/')
                            }
                        });
                }

                console.log(res)
            });
    }

    return (
        <div id="login" className="w-[350px] xs:w-[400px] bg-white mx-auto px-3 xs:px-10 py-12 translate-y-[50%]">
            <div className="text-3xl mb-10">Login</div>
            <label className="text-xl">Username</label>
            <input className="w-full mt-3 mb-5 border-b-2 focus:border-slate-800 focus:outline-none text-lg transition duration-200" type="text" onChange={changeEmail} />
            <label className="text-xl">Password</label>
            <input className="w-full mt-3 mb-5 border-b-2 focus:border-slate-800 focus:outline-none text-lg transition duration-200" type="password" onChange={changePassword} />
            <button className="ml-auto block text-2xl border-2 py-2 px-5" type="submit" onClick={handleSubmit}>Login</button>
        </div>

    )
}

export default QuanLy