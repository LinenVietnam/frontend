'use client'
import { API } from "@/helper/API"
import { useState } from "react"
import { toast, Bounce } from "react-toastify";

function Message() {

    const [emailOfUser, setEmailOfUser] = useState<any|null>('')
    const notify = () => toast.success('Chúng tôi đã ghi nhận email của bạn', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });;
    const notifyFail = () => toast.error('Vui lòng nhập email khác', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    const handleSend = () => {
        fetch(`${API}/emailUser/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({emailOfUser})
        }).then(res => res.json())
            .then(res => { 
                if(res.err === 0){
                    notify() 
                    setEmailOfUser('')
                }if(res.err === 1){
                    notifyFail()
                }
            });
    }
    
    const handleChange = (e: any) => {
        setEmailOfUser(e.target.value)
    }

    return (
        <section id="message" className="mt-20 w-full mx-auto bg-background-400 py-28">
            <div className="row">
                <div className="text-center mx-auto text-2xl md:text-4xl font-light mb-5 w-full md:w-[600px]">Nhận thông báo về sản phẩm mới của Linen Vietnam tại đây</div>
                <div className="text-center mb-5 gap-1">
                    <input type="text" className="w-[55%] xs:w-[70%] md:w-[500px] py-3 px-6 shadow-2xl focus:outline-none" placeholder="Nhập email của bạn tại đây" onChange={handleChange} value={emailOfUser} />
                    <button className="bg-white py-3 px-6 tracking-widest shadow-2xl" onClick={handleSend}>Đăng ký</button>
                </div>
                {/* <div className="flex mx-auto text-center justify-center">
                    <input type="checkbox" />
                    <div className="ml-3 font-sans">I agree to the <a href="">Privacy Policy.</a></div>
                </div> */}
            </div>
        </section>
    )
}

export default Message