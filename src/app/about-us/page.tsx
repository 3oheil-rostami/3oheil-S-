"use client";

import Button from "@/components/form/Button";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import Map from "@/components/maps";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="max-lg:h-96 lg:w-1/2 bg-gray-800">
        <Map />
      </div>
      <div className="lg:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-right">تماس با ما</h1>
          <p className="text-gray-600 mb-8 text-right">
            شما میتوانید در این قسمت ما را در تماس باشید
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <LoginInputWrapper
              icon={<FiUser className="text-gray-400" />}
              errorMessage={errors.name?.message}
            >
              <input
                className="pr-2 outline-none border-none font-sans grow placeholder:text-sm placeholder:font-bold bg-inherit"
                type="text"
                placeholder="نام و نام خانوادگی"
                {...register("name", {
                  required: "نام و نام خانوادگی الزامی است",
                  minLength: {
                    value: 3,
                    message: "نام باید حداقل 3 حرف باشد",
                  },
                })}
              />
            </LoginInputWrapper>

            <LoginInputWrapper
              icon={<FiMail className="text-gray-400" />}
              errorMessage={errors.email?.message}
            >
              <input
                className="pr-2 outline-none border-none font-sans grow placeholder:text-sm placeholder:font-bold bg-inherit"
                type="email"
                placeholder="ایمیل"
                {...register("email", {
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "آدرس ایمیل نامعتبر است",
                  },
                })}
              />
            </LoginInputWrapper>

            <LoginInputWrapper
              icon={<FiMessageSquare className="text-gray-400" />}
              errorMessage={errors.message?.message}
            >
              <textarea
                className="pr-2 outline-none border-none font-sans grow placeholder:text-sm placeholder:font-bold bg-inherit"
                placeholder="پیام های خود را در اینجا بنویسید"
                {...register("message", {
                  required: "پیام الزامی است",
                  minLength: {
                    value: 10,
                    message: "پیام باید حداقل 10 حرف باشد",
                  },
                })}
              />
            </LoginInputWrapper>

            <Button
              colorScheme="secondary"
              variant="fill"
              size="2xl"
              className="!w-full !font-semibold"
              type="submit"
            >
              ثبت تماس
            </Button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 text-sm text-gray-600 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <FiMapPin className="w-5 h-5 ml-2" />
            <span>آدرس: جهان هستی</span>
          </div>
          <div className="flex items-center">
            <FiMail className="w-5 h-5 ml-2" />
            <span>ایمیل: persian@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="w-5 h-5 ml-2" />
            <span>شماره تلفن: 09810202020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
