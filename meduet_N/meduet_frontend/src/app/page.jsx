import Link from 'next/link';

export default function Home() {
  return (
    <div>
     <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>はじめに</h2>
        <p>
          Meduet は気軽に症状や悩みを相談できるあなたの薬剤師です。<br />
          一般用医薬品（OTC医薬品、ドラッグストアで買える薬）を購入したいとき、薬剤師が症状とあなたの要望を聞いて、一番最適なおくすりを提案します。
          ただし、症状がひどい場合は、病院に行くことをお勧めする場合があります。
        </p>
        <p>
          Point.1　10000種類のお薬の中から、あなたの症状と要望に一番近いお薬を提案<br />
          Point.2　薬剤師の観点で、公平にお薬を選びます<br />
          Point.3　お薬の提案までは、無料です
        </p>
      </div>
      <h3 className="flex justify-center"></h3>
      <Link href="/customers">
          <h3 className="cursor-pointer hover:bg-gray-50 border-2 rounded p-4">
            <p>診断を始める</p>
            </h3>
        </Link>
      </div>
  );
}