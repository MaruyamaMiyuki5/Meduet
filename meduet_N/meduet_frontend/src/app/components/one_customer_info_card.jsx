export default function OneCustomerInfoCard({ 
  customer_id, customer_name, age, birth, gender, pregnant, allergy,chronic, medication, prefecture, height, weight
}) {
    return (
      <>
        <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
            <div className="card-body">
                <h2 className="card-title">{customer_name}さん</h2>
                <p>Customer ID: {customer_id}</p>
                <p>年齢: {age}</p>
                <p>誕生日{birth}</p>
                <p>性別: {gender}</p>
                <p>妊娠: {pregnant}</p> 
                <p>アレルギー: {allergy}</p>
                <p>通院: {chronic}</p>
                <p>治療: {medication}</p>
                <p>都道府県: {prefecture}</p>
                <p>身長: {height}</p>
                <p>体重: {weight}</p>
            </div>
        </div>
      </>
    )
  }