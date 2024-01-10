"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import createCustomer from './createCustomer';

export default function CreatePage() {
    const formRef = useRef();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        await createCustomer(formData);
        router.push(`./create/confirm?customer_id=${formData.get("customer_id")}`);
    };

    const items1 = [
        {id:1, item:"あり"},
        {id:1, item:"なし"},
    ]

    return (
        <>
            <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
                <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p><input type="text" name="customer_name" placeholder="桃太郎" className="input input-bordered" /></p>
                            </h2>
                            <p>customer ID:<input type="text" name="customer_id" placeholder="C030" className="input input-bordered" /></p>
                            <p>age:<input type="number" name="age" placeholder="30" className="input input-bordered" /></p>
                            <p>gender:<details className="dropdown">
                                <summary className="m-1 btn">こちらから選択してください</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>男</a></li>
                                    <li><a>女</a></li>
                                    <li><a>未回答</a></li>
                                </ul>
                            </details></p>
                            <p>pregnant:<details className="dropdown">
                                <summary className="m-1 btn">こちらから選択してください</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>している</a></li>
                                    <li><a>していない</a></li>
                                </ul>
                            </details></p>
                            <p>allergy:<details className="dropdown">
                                <summary className="m-1 btn">こちらから選択してください</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>ある</a></li>
                                    <li><a>ない</a></li>
                                </ul>
                            </details></p>
                            <p>prefecture:<input type="text" name="prefecture" placeholder="東京都" className="input input-bordered" /></p>
                            <p>height:<input type="text" name="height" placeholder="162cm" className="input input-bordered" /></p>
                            <p>weight:<input type="text"name="weight" placeholder="50kg" className="input input-bordered" /></p>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-primary m-4 text-2xl">
                                作成
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



