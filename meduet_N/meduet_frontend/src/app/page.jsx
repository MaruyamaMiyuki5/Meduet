import Link from 'next/link';
import Image from "next/image";
import localImage1 from "./logo.png";
import localImage2 from "./main_viz.png";



export default function Home() {
  return (
    <div>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Image src={localImage1} alt="LocalImage1" width={100} />
      </div>
      <div style={{ flex: 5}}>
        <Image src={localImage2} alt="LocalImage2" width={1000} />
      </div>
    </div>
     <div style={{ textAlign: 'left', marginTop: '20px' ,padding:'0 300px'}}>
        <h2 className='pb-5 text-2xl'>はじめに</h2>
        <p className='px-5'>
          Meduet は気軽に症状や悩みを相談できるあなたの薬剤師です。<br />
          一般用医薬品（OTC医薬品、ドラッグストアで買える薬）を購入したいとき、薬剤師が症状とあなたの要望を聞いて、一番最適なおくすりを提案します。
          ただし、症状がひどい場合は、病院に行くことをお勧めする場合があります。
        </p>
        <div className='text-lg my-20 ms-2'>
          <p >
            Point.1　10000種類のお薬の中から、あなたの症状と要望に一番近いお薬を提案<br />
          </p>
          <p className='pt-5'>
            Point.2　薬剤師の観点で、公平にお薬を選びます<br />
          </p>
          <p className='pt-5'>
            Point.3　お薬の提案までは、無料です
          </p>
        </div>
        <div className='px-20'>
          <Link href="/customers" >
              <h3 className="cursor-pointer hover:bg-blue-400 hover:text-black border-2 rounded-3xl p-5 bg-blue-700 text-white text-center m-10" >
                診断を始める
                </h3>
            </Link>
        </div>
      </div>
    </div>
  );
}