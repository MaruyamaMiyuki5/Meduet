"use server";
import { revalidatePath } from 'next/cache';

const createCustomer = async (formData) => {
    const creating_customer_name = formData.get("customer_name");
    const creating_customer_id = formData.get("customer_id");
    const creating_age = formData.get("age");
    const creating_gender = formData.get("gender");
    const creating_pregnant = formData.get("pregnant");
    const creating_prefecture = formData.get("prefecture");
    const creating_allergy = formData.get("allergy");
    const creating_height = formData.get("height");
    const creating_weight = formData.get("weight");

    const body_msg = JSON.stringify({
        customer_name: creating_customer_name,
        customer_id: creating_customer_id,
        age: creating_age,
        gender: creating_gender,
        pregnant: creating_pregnant,
        prefecture: creating_prefecture,
        allergy: creating_allergy,
        height: creating_height,
        weight: creating_weight,
    })

    const res = await fetch(`http://127.0.0.1:5000/customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body_msg,
    });
    if (!res.ok) {
        throw new Error('Failed to create customer');
    }

    revalidatePath(`/customers`);
}

export default createCustomer;
