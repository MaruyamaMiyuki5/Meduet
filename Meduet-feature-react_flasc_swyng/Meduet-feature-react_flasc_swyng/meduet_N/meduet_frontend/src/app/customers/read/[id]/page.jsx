"use client"
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx"
import BackButton from "./back_button";
import fetchCustomer from "./fetchCustomer";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';

export default function ReadPage(props) {
  const id = props.params.id;

  const [customerInfo, setCustomerInfo] = useState([]);

  useEffect(() => {
      const fetchAndSetCustomer = async () => {
          const customerData = await fetchCustomer(id);
          setCustomerInfo(customerData);
      };
      fetchAndSetCustomer();
  }, []);


  return (
    <>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h1>おくすりの提案</h1>
        //日付・薬剤師名等をDBから引っ張る

        <h2>◯◯さんのご要望</h2>
        <p>
          ・一番に期待する効果：<br />
          ・次に期待する効果<br />

        </p>

        <h3>◯◯さんの状態</h3>
        <p>
          ///////////////////////////
        </p>

        <h4>◯◯さんへのご提案</h4>
        <p>
          ///////////////////////////
        </p>
        
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

      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <OneCustomerInfoCard {...customerInfo[0]} />
        <BackButton>戻る</BackButton>
      </div>
  );


    </>
  )
}
