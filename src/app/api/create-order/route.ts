import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export interface CustomerInfo {
  firstName: string;
  secondName: string;
  country: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
  size: string;
  color: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { customer, items } = (await req.json()) as {
      customer: CustomerInfo;
      items: CartItem[];
    };

    // Step 1: Create Customer in Sanity
    const sanityCustomer = await client.create({
      _type: "customer",
      firstName: customer.firstName,
      secondName: customer.secondName,
      country: customer.country,
      address: customer.address,
      city: customer.city,
      province: customer.province,
      zipCode: customer.zipCode,
      phone: customer.phone,
      email: customer.email,
    });

    // console.log("Customer Created:", sanityCustomer);

    // Step 2: Create Order in Sanity (linking customer)
    const orderTotal = items.reduce((sum, item) => sum + item.total, 0);
    const sanityOrder = await client.create({
      _type: "order",
      customer: {
        _type: "reference",
        _ref: sanityCustomer._id,
      },
      firstName: sanityCustomer.firstName, // Customer first name
      secondName: sanityCustomer.secondName, // Customer second name
      items: items.map((item , index) => ({
        _key: item._id || `item-${index}`, // Ensure each item has a unique key
        // _type: "items",
        id: item._id,
        product_name: item.name,
        product_price: item.price,
        product_color: item.color,
        product_quantity: item.quantity,
        product_size: item.size,
        product_total: item.total,
      })),
      order_date: new Date().toISOString(),
      total_amount: orderTotal,
    });

    // console.log("Order Created:", sanityOrder);

    // Return a successful response
    return NextResponse.json({
      success: true,
      message: "Customer and Order created successfully!",
      customer: sanityCustomer,
      order: sanityOrder,
    });
  } catch (error) {
    console.error("Error in Checkout API:", error);

    return NextResponse.json(
      { success: false, error: "An error occurred during checkout." },
      { status: 500 }
    );
  }
}
