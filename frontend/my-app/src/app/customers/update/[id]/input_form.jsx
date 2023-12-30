import OneCustomerInfoCard from "src/app/components/one_customer_info_card.jsx"

export default function InputForm({updateCustomerFunc, customerInfo}) {
  const previous_customer_name = JSON.stringify(customerInfo[0].customer_name)
  const previous_customer_id = JSON.stringify(customerInfo[0].customer_id)
  const previous_age = JSON.stringify(customerInfo[0].age)
  const previous_gender = JSON.stringify(customerInfo[0].gender)
  const previous_pregnant = JSON.stringify(customerInfo[0].pregnant)
  const previous_prefecture = JSON.stringify(customerInfo[0].prefecture)
  const previous_allergy = JSON.stringify(customerInfo[0].allergy)
  const previous_height = JSON.stringify(customerInfo[0].height)
  const previous_weight = JSON.stringify(customerInfo[0].weight)
  
    return (
        <>
        <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
            <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
            <form action={updateCustomerFunc} method="POST">
                <div className="card-body">
                <h2 className="card-title">
                    <p><input type="text" name="customer_name" defaultValue={previous_customer_name} className="input input-bordered" />さん</p>
                </h2>
                <p>Customer ID:<input type="text" name="customer_id" defaultValue={previous_customer_id} className="input input-bordered" /></p>
                <p>Age:<input type="number" name="age" defaultValue={previous_age} className="input input-bordered" /></p>
                <p>Gender:<input type="text" name="gender" defaultValue={previous_gender} className="input input-bordered" /></p>
                <p>Pregnant:<input type="text" name="pregnant" defaultValue={previous_pregnant} className="input input-bordered" /></p>
                <p>allergy:<input type="text" name="allergy" defaultValue={previous_allergy} className="input input-bordered" /></p>
                <p>prefecture:<input type="text" name="prefecture" defaultValue={previous_prefecture} className="input input-bordered" /></p>
                <p>height:<input type="text" name="height" defaultValue={previous_height} className="input input-bordered" /></p>
                <p>weight:<input type="text" name="weight" defaultValue={previous_weight} className="input input-bordered" /></p>
                </div>
                <div className="flex justify-center">
                <button className="btn btn-primary m-4 text-2xl">更新</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )

}