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
                            <p>生年月日:<input type="text" name="birth" placeholder="1996/1/1" className="input input-bordered" /></p>
                            <p>性別：<select class="select select-bordered w-full max-w-xs">
                                <option disabled selected>こちらから選択してください</option>
                                <option>男</option>
                                <option>女</option>
                                <option>無回答</option></select></p>
                            <p>妊娠の有無：<select class="select select-bordered w-full max-w-xs" name="pregnant">
                                <option disabled selected>こちらから選択してください</option>
                                <option>妊娠中</option>
                                <option>授乳中</option>
                                <option>妊娠可能性あり</option>
                                <option>なし</option></select></p>
                            <p>アレルギー：<select class="select select-bordered w-full max-w-xs" name="allergy">
                                <option disabled selected>こちらから選択してください</option>
                                <option>あり</option>
                                <option>なし</option></select></p>    
                            <p>通院中の病気の有無：<select class="select select-bordered w-full max-w-xs" name="chronic">
                                <option disabled selected>こちらから選択してください</option>
                                <option>あり</option>
                                <option>なし</option></select></p>     
                            <p>服用中の有無：<select class="select select-bordered w-full max-w-xs" name="medication">
                                <option disabled selected>こちらから選択してください</option>
                                <option>あり</option>
                                <option>なし</option></select></p>     
                            <p>住居都道府県:<input type="text" name="prefecture" placeholder="東京都" className="input input-bordered" /></p>
                            <p>症状<select class="select select-bordered w-full max-w-xs">
                                <option disabled selected>こちらから選択してください</option>
                                <option>ある</option>
                                <option>ない</option></select></p> 
                        
                            <p>どこの部位（複数選択可）：<div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">顔</span> 
                                    <input type="checkbox" checked="" class="checkbox" />
                                    <span class="label-text">背中</span> 
                                    <input type="checkbox" checked="" class="checkbox" />
                                    <span class="label-text">デコルテ</span> 
                                    <input type="checkbox" checked="" class="checkbox" />
                                    <span class="label-text">その他</span> 
                                    <input type="checkbox" checked="" class="checkbox" />
                                </label>
                                </div></p>     

                            <p>症状：<select class="select select-bordered w-full max-w-xs" name="symtom_part_from">
                                <option>ニキビ</option></select></p> 
                            
                            <p>いつから：<select class="select select-bordered w-full max-w-xs" name="symtom_part_from">
                                <option disabled selected>こちらから選択してください</option>
                                <option>昨日</option>
                                <option>数日前</option>
                                <option>一週間前</option>
                                <option>数週間前</option>
                                <option>一ヶ月前</option>
                                <option>数ヶ月前</option>
                                <option>それ以上前</option></select></p>                         
                            <p>何個出来ているか（複数部位の場合最もひどい部位の状況）：<select class="select select-bordered w-full max-w-xs" name="symtom_ct">
                                <option disabled selected>こちらから選択してください</option>
                                <option>1個</option>
                                <option>2・3個</option>
                                <option>10個</option>
                                <option>それ以上</option></select></p> 
                            <p>ふくれている大きさ：<select class="select select-bordered w-full max-w-xs" name="symtom_size">
                                <option disabled selected>こちらから選択してください</option>
                                <option>ふくれていない</option>
                                <option>1mm</option>
                                <option>5mm</option>
                                <option>1cm以上</option></select></p> 
                            <p>色と見た目（最も近い状況）：<select class="select select-bordered w-full max-w-xs" name="symptom_color">
                                <option disabled selected>こちらから選択してください</option>
                                <option>全体に赤い</option>
                                <option>中心が黒い</option>
                                <option>中心が白～黄色</option>
                                <option>ただれている</option>
                                <option>その他</option></select></p> 
                            <p>患部の症状：<select class="select select-bordered w-full max-w-xs" name="symtom_affected">
                                <option disabled selected>こちらから選択してください</option>
                                <option>かゆい</option>
                                <option>痛い</option>
                                <option>その他</option></select></p> 
                            <p>症状が出た時期：<select class="select select-bordered w-full max-w-xs" name="symtom_firsttime">
                                <option disabled selected>こちらから選択してください</option>
                                <option>小学生から</option>
                                <option>中学生から</option>
                                <option>高校生から</option>
                                <option>大学生から</option>
                                <option>社会人になってから</option></select></p> 
                            <p>困っていること：<select class="select select-bordered w-full max-w-xs" name="problem">
                                <option disabled selected>こちらから選択してください</option>
                                <option>病院を探している</option>
                                <option>ドラッグストアの薬で治したいが何が自分に合っているかわからない</option>
                                <option>自分の対処で治らない</option>
                                <option>薬剤師に相談したい</option>
                                <option>薬以外のケアも知りたい</option>
                                <option>ニキビの状態を記録したい</option></select></p> 
                            <p>1番に期待する効果：<select class="select select-bordered w-full max-w-xs" name="first_effect">
                                <option disabled selected>こちらから選択してください</option>
                                <option>赤みを抑えたい</option>
                                <option>殺菌したい</option>
                                <option>毛穴のつまりを取りたい</option>
                                <option>組織修復をしたい</option>
                                <option>薬剤師におまかせ</option></select></p> 
                            <p>次に期待する効果：<select class="select select-bordered w-full max-w-xs" name="second_effect">
                                <option disabled selected>こちらから選択してください</option>
                                <option>赤みを抑えたい</option>
                                <option>殺菌したい</option>
                                <option>毛穴のつまりを取りたい</option>
                                <option>組織修復をしたい</option>
                                <option>薬剤師におまかせ</option></select></p> 
                            <p>希望の剤型：<select class="select select-bordered w-full max-w-xs" name="drug_form">
                                <option disabled selected>こちらから選択してください</option>
                                <option>クリーム</option>
                                <option>軟膏</option>
                                <option>ローション</option>
                                <option>スプレー</option>
                                <option>特に希望がない</option></select></p> 
                            <p>効果と剤型のどちらを優先するか：<select class="select select-bordered w-full max-w-xs" name="priority_effect_form">
                                <option disabled selected>こちらから選択してください</option>
                                <option>効果優先</option>
                                <option>剤型優先</option>
                                <option>薬剤師におまかせ</option></select></p> 
                            <p>イオウのにおいは気になるか：<select class="select select-bordered w-full max-w-xs" name="sulfur_smell">
                                <option disabled selected>こちらから選択してください</option>
                                <option>気になる</option>
                                <option>気にならない</option></select></p> 


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



