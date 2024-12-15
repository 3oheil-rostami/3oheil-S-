"use client";
import Button from "@/components/form/Button";
import Input2 from "@/components/form/Input2";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { sendNumber } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import { toast } from "react-toastify";

type FormValues = {
  number: string;
};

const GetPhoneNumber = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (!navigator.onLine) {
      toast.warning("شما آنلاین نیستید .");
      return;
    }

    localStorage.setItem("phoneNumber", data.number);

    const toastId = toast.loading("در حال ارسال درخواست ...");
    try {
      const response = await sendNumber(data.number);
      toast.update(toastId, {
        type:
          response.status >= 200 && response.status < 300 ? "success" : "error",
        isLoading: false,
        autoClose: 3000,
        render() {
          response.status === 200
            ? router.replace("/auth/register/get_code")
            : response.status === 302
              ? router.replace("/auth/register/sign_up")
              : "";

          return response.status === 200 ? (
            "شماره با موفقیت بذیرفته شدید و کد براتون ارسال شد ."
          ) : response.status === 302 ? (
            "شماره شما تائید شده و  باید اطلاعات خودتون را کامل کنید ."
          ) : response.status === 400 ? (
            " خطایی در ارسال درخواست رخ داد ."
          ) : response.status === 409 ? (
            <div className="flex justify-between gap-2 items-center">
              <p className="text-sm">
                شما با این شماره حسابی دارید . میخواهید وارد شوید ؟
              </p>
              <Link href={'/auth/login'} className="btn btn-primary min-h-fit h-fit">
                ورود
              </Link>
            </div>
          ) : response.status === 429 ? (
            " چند لحظه پیش کد را ارسال کرده ایم،  چند لحظه صبر کنید تا دوباره بتوانیم بفرستیم."
          ) : response.status === 500 ? (
            "خطا در سمت سرور رخ داد :("
          ) : (
            "خطای ناشناس"
          );
        },
      });
    } catch (error) {
      console.error("error:", error);
      toast.update(toastId, {
        type: "error",
        isLoading: false,
        autoClose: 3000,
        render() {
          return "خطایی رخ داد .";
        },
      });
    }
  });

  return (
    <section className="bg-white px-5 py-10 rounded-2xl ">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        سلام به روی ماهتون✨
      </h1>
      <p className="text-sm font-normal text-gray-600 mb-6 mt-2">
        خوشحالیم که شمارو کنار خودمون میبینیم .
      </p>
      <p className="text-sm font-bold text-gray-600 mb-3 mr-2">
        برای شروع ثبت نام ابتدا باید شماره خود را وارد کنید :)
      </p>
      <form onSubmit={handleSubmit(async () => await onSubmit())} className="">
        <Input2
          icon={<FiPhone />}
          errorMessage={formState.errors.number?.message}
          type="number"
          placeholder="شماره همراه"
          {...register("number", {
            pattern: {
              value: /^09\d{9}$/,
              message: "ابتدای شماره را به این شکل وارد کنید :....09 ",
            },
            required: "شماره رو وارد نکردین :)",
          })}
        />
        <button className="w-full btn btn-primary mt-2">
          قدم بعدی
        </button>

        <p className="text-sm font-normal text-neutral-800 px-2 mt-2">
          <span> اگه قبلا ثبت نام کردین </span>
          <Link
            href={"/auth/login"}
            className="font-bold hover:text-primary-700 link link-primary"
          >
            ورود
          </Link>
          <span> را کلیک کنید.</span>
        </p>
      </form>
    </section>
  );
};

export default GetPhoneNumber;
