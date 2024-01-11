export default function OneCustomerInfoCard({ 
  customer_id, customer_name, age, birth, gender, pregnant, allergy,chronic, medication, prefecture, height, weight
}) {
    return (
      <>
        <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
            <div className="card-body">
                <h2 className="card-title">{customer_name}さん</h2>
                <p>Customer ID: {customer_id}</p>
                <p>生年月日{birth}</p>
                <p>性別: {gender}</p>
                <p>妊娠の有無: {pregnant}</p> 
                <p>アレルギー: {allergy}</p>
                <p>通院中の病気の有無: {chronic}</p>
                <p>服用中の有無: {medication}</p>
                <p>住居都道府県: {prefecture}</p>
                <p>どこの部位: {symtom_part_from}</p>
                <p>症状: {symtom}</p>
                <p>いつから: {symtom_part_from}</p>
                <p>何個出来ているか（複数部位の場合最もひどい部位の状況）: {symtom_ct}</p>
                <p>ふくれている大きさ: {symtom_size}</p>
                <p>色と見た目（最も近い状況）: {symptom_color}</p>
                <p>患部の症状: {symtom_affected}</p>
                <p>症状が出た時期: {symtom_firsttime}</p>
                <p>困っていること: {problem}</p>
                <p>1番に期待する効果: {first_effect}</p>
                <p>次に期待する効果: {second_effect}</p>
                <p>希望の剤型: {drug_form}</p>
                <p>効果と剤型のどちらを優先するか: {priority_effect_form}</p>
                <p>イオウのにおいは気になるか: {sulfur_smell}</p>
            </div>
        </div>
      </>
    )
  }