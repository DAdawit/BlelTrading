"use client";

import { useSearchParams } from "next/navigation";
import OrderSummary from "@/components/contact/OrderSummary";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPageClient() {
  const searchParams = useSearchParams();

  const product = searchParams.get("product");
  const code = searchParams.get("code");
  const price = searchParams.get("price");
  const discount = searchParams.get("discount");

  const orderDetails = product ? { product, code, price, discount } : null;

  return (
    <>
      <OrderSummary product={product} code={code} price={price} discount={discount} />
      <ContactForm orderDetails={orderDetails} />
    </>
  );
}
