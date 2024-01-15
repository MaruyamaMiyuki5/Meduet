"use client"
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import localImage1 from "../../logo.png";
import localImage2 from "../../main_viz.png";
import localImage3 from "./drug1.png";
import localImage4 from "./drug2.png";


export default function ReadPage(props) {
  const id = props.params.id;

  const [customerInfo, setCustomerInfo] = useState([]);

  // useEffect(() => {
  //     const fetchAndSetCustomer = async () => {
  //         const customerData = await fetchCustomer(id);
  //         setCustomerInfo(customerData);
  //     };
  //     fetchAndSetCustomer();
  // }, []);


  return (
    <>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                  <Image src={localImage1} alt="LocalImage1" width={100} />
              </div>
              <div style={{ flex: 3}}>
                  <Image src={localImage2} alt="LocalImage2" width={800} />
              </div>
            </div>

      <div style={{ textAlign: 'left', marginTop: '20px' ,padding: '0 100px'}}>
        <h1 className="text-2xl font-bold">おくすりの提案</h1>
        <p className="mt-5">
        2024年1月17日 
        </p>
        <p>
        提案者：丸山　美由紀　（薬剤師登録番号：・・・・・）
        </p>
        <h2 className="mt-10 text-2xl font-bold">野村 大郎さんのご要望</h2>
        <p>
          ・一番に期待する効果：赤みを抑えたい<br />
          ・次に期待する効果：殺菌したい<br />
          ・希望の剤型：クリーム<br/>
          ・効果と剤型の優先：効果<br/>
          ・イオウのにおい：気になる<br/>
        </p>

        <h3  className="text-2xl my-5 font-bold">野村 大郎さんの状態</h3>
        <p>
        尋常性ざ瘡治療ガイドライン2023※を参照すると現在、にきびの維持期～急性炎症期にあたりそうです。<br/>
        痛みがひどくなったり、化膿したり、ご提案のお薬を使用しても繰り返しニキビが出来るようでしたら皮膚科受診をお勧めします！<br/>
        今からご提案するOTC薬は病院のお薬より効果が弱いので、必ずしも治らないことを承知ください。<br/>
        ※尋常性ざ瘡=ニキビのこと
        </p>

        <h4  className="text-2xl my-5 font-bold">野村 大郎さんへのご提案</h4>
        <div>
          <p>
          1番におすすめ：メンソレータムアクネス25メディカルクリームc
          </p>
          <div className="mx-5">
            <p>パッケージ</p>
            <Image src={localImage3} alt="LocalImage3" width={200} />
            <p>
              有効成分：イブプロフェンピコノール3.0ｇ（100g中、赤みを抑える）→赤ニキビに<br/>
              　　　　　イソプロプルメチルフェノール1.0g（100g中、殺菌作用）→白～黄ニキビに</p>
            <p>効能効果：ニキビ・吹き出物</p>
            <p>剤型：クリーム</p>
            <p>容量：16ｇ</p>
            <p>希望小売価格：1200円（税抜）</p>
          </div>
        </div>
        <div className="mt-5">
          <p>
          2番におすすめ：ペアアクネリキッド治療薬
          </p>
          <div className="mx-5">
            <p>パッケージ</p>
            <Image src={localImage4} alt="LocalImage4" width={100} />
            <p>
             アラントイン0.2ｇ(100g中、赤みを抑える、組織修復)→赤ニキビ、跡残りが気になる人に<br/>
             　　　　　イソプロプルメチルフェノール0.3g（100g中、殺菌作用）→白～黄ニキビに<br/>
             　　　　　サリチル酸0.5ｇ（100ｇ中、角質軟化）→皮膚が固くなっている人に<br/>
             </p>
            <p>効能効果：ニキビ・吹き出物</p>
            <p>剤型：ローション
            </p>
            <p>容量：120ml</p>
            <p>希望小売価格：1480円（税抜）</p>
          </div>
        </div>
        

        <h3  className="text-2xl my-10 font-bold">野村 大郎さんさんへ2製品をおすすめした理由</h3>
        <p>
        私がご提案できる、最新の製品情報では、ご要望の①殺菌成分でアクネ菌の増殖を抑え、肌表面を清潔にする、②赤みを抑える、③角質を柔らかくして毛穴のつまりを排出する、④組織修復成分の全てのお薬が配合された製品は、しいて言えばペアアクネリキッド治療薬、メンソレータムアクネス25メディカルミストであるからです。<br/>
        中心が白~黄色になっているもの中心は皮脂が詰まっています。つまりをなくすには③の成分がおすすめです。赤くなっている炎症には②の成分が炎症を抑えてくれます。<br/>
        お薬の効果で1番希望されているアクネ菌の殺菌作用は尋常性ざ瘡治療ガイドライン2017※では特に推奨されたおくすり成分ではありませんが、この殺菌成分が配合されていて、②の成分であるイブプロフェンピコノールは赤みが増したときに選択肢の1つとして推奨される成分ですので、効き目優先ということであれば、私は斎藤さんにはメンソレータムアクネス25メデｨカルクリームCを1番におすすめします！
        </p>
        <div className="my-20">
          <h5 className="flex justify-center">ドラッフストアの検索【coming soon】</h5>
          <p>選んだおくすりが変えるドラッグストア、調剤薬局を探します       
          </p>
          <Link href="https://www.matsukiyo.co.jp/store/online/">
            <h5 className="cursor-pointer hover:bg-gray-50 border-2 rounded p-4">
              <p>おくすり購入</p>      
              </h5>
          </Link>

          <h6 className="flex justify-center">薬剤師に相談【coming soon】</h6>
          <p>相談したい薬剤師を選び、日程を決めます（有料）       
          </p>
          <Link href="https://www.matsukiyo.co.jp/store/online/">
            <h6 className="cursor-pointer hover:bg-gray-50 border-2 rounded p-4">
              <p>相談日を決める</p>      
              </h6>
          </Link>

          <h7 className="flex justify-center">病院の検索【coming soon】</h7>
          <p>症状を治す病院を探す       
          </p>
          <Link href="https://www.matsukiyo.co.jp/store/online/">
            <h7 className="cursor-pointer hover:bg-gray-50 border-2 rounded p-4">
              <p>病院検索</p>      
              </h7>
          </Link>

        </div>
        </div>
  );


    </>
  )
}
