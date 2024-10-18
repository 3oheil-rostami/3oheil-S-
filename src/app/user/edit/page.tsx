"use client";

import { store } from "@/app/store";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import { updateUserInformation } from "@/services/user";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Provider, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUserInformation } from "@/reducers/user";

interface FormField {
  name: string;
  family: string;
  email: string;
}

const EditPersonInformationContent = () => {
  const router = useRouter();
  const userInformation = useSelector(getUserInformation);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormField>({
    defaultValues: {
      name: userInformation?.name,
      family: userInformation?.family,
      email: userInformation?.email,
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("object");
    handleSubmit(async (data) => {
      console.log("data:", data);
      const toastId = toast.loading("در حال ذخیره کردن اطلاعات ...");
      const response = await updateUserInformation(data);
      const { status } = response;
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type: status === 201 ? "success" : "error",
        render() {
          if (status === 201) router.push("/user");
          return status === 201
            ? "اطلاعات با موفقیت ثبت شدند ."
            : status === 400
            ? "خطایی به هنگام ارسال درخواست رخ داد ."
            : status === 403
            ? "این ایمیل از قبل وجود دارد"
            : status === 500
            ? "خطایی در سمت سرور رخ داد ."
            : "خطایی رخ داد .!";
        },
      });
    });
  };

  return (
    <div>
      <p>دیتاهای خود را ویرایش کنید و در آخر ثبت اطلاعات رو بزنید .</p>
      <form className="mt-10" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          <div className="field-item">
            <Input
              className="border shadow-md focus-within:shadow-inner transition-all duration-300"
              label="نام :"
              placeholder="مثلا : باران"
              errorHandling={errors.name?.message}
              {...register("name", {
                pattern: {
                  value: /^(?=.*[\u0600-\u06FF]).+$/,
                  message: "از حروف فارسی استفاده کنید.",
                },
                required: {
                  value: true,
                  message: "این فیلد الزامیست .",
                },
              })}
            />
          </div>
          <div className="field-item">
            <Input
              className="border shadow-md focus-within:shadow-inner transition-all duration-300"
              label="نام خانوادگی :"
              placeholder="مثلا : علیزاده"
              errorHandling={errors.family?.message}
              {...register("family", {
                pattern: {
                  value: /^(?=.*[\u0600-\u06FF]).+$/,
                  message: "از حروف فارسی استفاده کنید.",
                },
                required: {
                  value: true,
                  message: "این فیلد الزامیست .",
                },
              })}
            />
          </div>
          <div className="field-item">
            <Input
              className="border shadow-md focus-within:shadow-inner transition-all duration-300"
              label="ایمیل :"
              placeholder="مثلا : DomonShop@gmail.com"
              errorHandling={errors.email?.message}
              {...register("email", {
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                  message: "فرمت وارد شده درست نمیباشد .",
                },
              })}
            />
          </div>
          <div className="field-item flex items-center justify-end gap-2">
            <Button
              colorScheme="secondary"
              variant="outline"
              size="xs"
              style={{ color: "#d71d44" }}
              onClick={() => router.back()}
            >
              لغو عملیات
            </Button>
            <Button
              colorScheme="secondary"
              variant="fill"
              size="xs"
              type="submit"
            >
              ثبت اطلاعات
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const EditPersonInformation = () => (
  <Provider store={store}>
    <EditPersonInformationContent />
  </Provider>
);

export default EditPersonInformation;
