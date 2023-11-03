import React from "react";
import "./underHeaderFirstBox.css";
import { useForm } from "react-hook-form";

export default function UnderHeaderFirstBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form
      className="under-header-first-box-form container"
      onSubmit={handleSubmit(onSubmit)}
    >
      {[
        "Müşteri Unvanı",
        "İlgili Kişi",
        "Adres",
        "Şube",
        "Sipariş No",
        "Seri No",
        "Ürün Açıklaması",
        "Ürün Kategorisi",
        "Ürün Markası",
        "Model",
      ].map((field, index) => (
        <div className="row" key={index}>
          <div className="under-header-first-box-form-label box-borders col-4 d-flex align-items-center p-1">
            <label htmlFor={field}>{field}</label>
          </div>
          <div className="under-header-first-box-form-label-inputs col-8 box-borders p-1">
            {field === "Adres" ? (
              <textarea id={field} {...register(field)} />
            ) : (
              <input
                id={field}
                name={field}
                type="text"
                {...register(field, {
                  maxLength: field === "Müşteri Unvanı" ? 250 : 30,
                })}
              />
            )}
          </div>
        </div>
      ))}
      <div className="row d-flex justify-content-center align-items-center">
        <input type="submit" />
      </div>
    </form>
  );
  
}
