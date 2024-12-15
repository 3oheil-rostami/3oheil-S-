"use client";
import Input2 from "@/components/form/Input2";
import { signUp as networkSignUp } from "@/services/auth";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  family: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const { register, handleSubmit, watch, formState } = useForm<FormValues>();
  const router = useRouter();
  const submitHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onSubmit = handleSubmit(async ({ ...data }) => {
    if (!navigator.onLine) {
      toast.warning("شما آنلاین نیستید .");
      return;
    }
    const phoneNumber: string = localStorage.getItem("phoneNumber") || "-1";
    const toastId = toast.loading("در حال ارسال درخواست ...");
    try {
      const response = await networkSignUp({
        ...data,
        number: phoneNumber,
      });
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type:
          response.status >= 200 && response.status < 300 ? "success" : "error",
        async render() {
          response.status === 201
            ? setTimeout(() => {
              router.replace("/");
            }, 3000)
            : router.replace("/auth/register/get_phone_number");

          return response.status === 500
            ? "خطایی در سرور رخ داده است ."
            : response.status === 401
              ? "شماره شما تایید نشده است ."
              : response.status === 400
                ? "خطایی در اسال درخواست رخ داد ."
                : response.status === 201
                  ? "ثبت نام با موفقیت انجام شد . خیلی خوش آمدید ."
                  : "خطای ناشناس :/";
        },
      });
    } catch (error) {
      console.error("error:", error);
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type: "error",
        async render() {
          return "خطایی رخ داد .";
        },
      });
    }
  });

  return (
    <section className="bg-white px-5 py-10 rounded-2xl max-md:shadow-2xl">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        تا سه نشه بازی نشه{" "}
      </h1>
      <p className="text-sm font-normal text-gray-600 mt-7">
        اطلاعات خودتون رو اینجا کامل کنید تا دلتون خنک شه و کار ثبت نام تموم شه
        .
      </p>
      <form className=" pt-1" onSubmit={submitHandler}>
        <Input2
          icon={<IoPersonSharp />}
          errorMessage={formState.errors.name?.message}
          placeholder="نام"
          {...register("name", {
            required: { value: true, message: "نام الزامیست" },
            pattern: {
              value: /^(?=.*[\u0600-\u06FF]).+$/,
              message: "از حروف فارسی استفاده کنید.",
            },
          })}
        />

        <Input2
          icon={<BsFillPersonLinesFill />}
          errorMessage={formState.errors.family?.message}
          placeholder="نام خانوادگی"
          {...register("family", {
            required: { value: true, message: "نام خانوادگی الزامیست" },
            pattern: {
              value: /^(?=.*[\u0600-\u06FF]).+$/,
              message: "از حروف فارسی استفاده کنید.",
            },
          })}
        />

        <Input2
          icon={<IoMdMail />}
          errorMessage={formState.errors.email?.message}
          placeholder="ایمیل (اختیای)"
          type="email"
          {...register("email", {
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
              message: "فرمت وارد شده درست نمیباشد .",
            },
          })}
        />

        <Input2
          icon={<FaLock />}
          errorMessage={formState.errors.password?.message}
          type="password"
          placeholder="رمز عبور"
          {...register("password", {
            required: { value: true, message: "رمز عبور الزامیست !" },
            minLength: {
              value: 8,
              message: "رمز عبور نباید کمتر از 8 کاراکتر باشد .",
            },
            maxLength: {
              value: 25,
              message: "رمز عبور نباید بیشتر از 25 کاراکتر باشد .",
            },
          })}
        />

        <Input2
          icon={<FaLock />}
          errorMessage={formState.errors.confirmPassword?.message}
          type="password"
          placeholder="تکرار رمز عبور"
          {...register("confirmPassword", {
            required: { value: true, message: "تکرار رمز عبور الزامیست !" },
            validate: (value) => {
              if (watch("password") !== value) {
                return "با رمز عبور مطابقت ندارد .";
              }
            },
          })}
        />

        <button className="w-full btn btn-primary mt-4" >
          ثبت نام
        </button>
      </form>
    </section>
  );
};

export default SignUp;
