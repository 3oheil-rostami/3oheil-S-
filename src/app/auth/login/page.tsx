"use client";
import Input2 from "@/components/form/Input2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { MdLock, MdPhone } from "react-icons/md";
import { toast } from "react-toastify";
import { } from "react-toastify/addons/use-notification-center";

type FormValues = {
  number: string;
  password: string;
};
0;

async function handleSendData(data: FormValues) {
  return fetch(
    process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_BACKEND_URL + "/auth/login",
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );
}

const Login = () => {
  const router = useRouter();

  const [completedLogin, setCompletedLogin] = useState<boolean>(false);
  const { register, handleSubmit, formState, watch } = useForm<FormValues>();

  const onSubmit = handleSubmit(async ({ ...data }) => {
    if (!navigator.onLine) {
      toast.warning("شما آنلاین نیستید .");
      return;
    }

    const toastId = toast.loading("در حال انجام درخواست ...");
    try {
      const response = await handleSendData({ ...data });
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type: response.ok ? "success" : "error",
        render() {
          if (response.status === 200) {
            setCompletedLogin(true);
            router.replace("/", { scroll: true });
          }
          return response.status === 500
            ? "خطایی در سرور رخ داده است ."
            : response.status === 404
              ? "شما هنوز با این شماره ثبت نام نکرده‌اید ."
              : response.status === 403
                ? "شما بن شده اید، با پشتیبانی تماس بگیرید ."
                : response.status === 401
                  ? "رمز اشتباه است ."
                  : response.status === 400
                    ? "خطایی در هنگام ارسال درخواست پیش اومد ."
                    : response.status === 200
                      ? "ثبت نام با موفقیت انجام شد . خیلی خوش آمدید ."
                      : "";
        },
      });
    } catch (error) {
      console.log(error);
      toast.update(toastId, {
        render() {
          return "با خطا مواجه شدیم .";
        },
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  });

  const submitHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  console.log(register("password", {
    required: { value: true, message: "رمز عبور الزامیست !" },
  })
  )

  return (
    <section className="bg-white px-5 py-10 rounded-2xl">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        سلامی دوباره به روی ماهتون✨
      </h1>
      <p className="text-sm font-normal text-gray-600 mb-7">
        خوشحالیم که باز شمارو کنار خودمون میبینیم .
      </p>
      <p className="text-sm font-bold text-gray-600 mb-3 mr-2">
        لطفا اطلاعات فرم زیر رو پر کنید.
      </p>
      <form className="" onSubmit={submitHandler}>
        <Input2
          icon={<MdPhone />}
          errorMessage={formState.errors.number?.message}
          placeholder="شماره تلفن"
          {...register("number", {
            pattern: {
              value: /^09\d{9}$/,
              message: "ابتدای شماره را به این شکل وارد کنید :0912 ",
            },
            required: "شماره رو وارد نکردین :)",
          })}
        />

        <Input2
          icon={<MdLock />}
          errorMessage={formState.errors.password?.message}
          type="password"
          placeholder="رمز عبور"
          {...register("password", {
            required: { value: true, message: "رمز عبور الزامیست !" },
          })}
        />
        <button className="btn btn-primary w-full rounded-2xl mt-2">
          ورود
        </button>
      </form>

      <span className="divider"></span>

      <div className="flex items-center justify-between px-2 gap-3 mt-2">
        <Link
          href={"/auth/login/forget_password"}
          className="btn btn-secondary btn-outline min-h-fit h-fit py-1 "
        >
          بازیابی رمز عبور
        </Link>
        <Link
          href={'/auth/register/get_phone_number'}
          aria-disabled={completedLogin}
          className="btn btn-primary btn-outline min-h-fit h-fit py-1 "
        >
          ثبت نام
        </Link>
      </div>
    </section>
  );
};

export default Login;
