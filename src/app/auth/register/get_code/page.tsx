"use client";
import Button from "@/components/form/Button";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { sendCode } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import { toast } from "react-toastify";

type FormValues = {
  code: string;
};

const GetCode = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = handleSubmit(async ({ code }) => {
    const number: string = localStorage.getItem("phoneNumber") || "-1";

    if (!navigator.onLine) {
      toast.warning("شما آنلاین نیستید");
      return;
    }
    const toastId = toast.loading("در حال ارسال درخواست ...");

    try {
      const response = await sendCode({ code, number });
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type:
          response.status >= 200 && response.status < 300 ? "success" : "error",
        render() {
          response.status === 440
            ? router.replace("/auth/register/get_phone_number")
            : response.status === 200
            ? router.replace("/auth/register/sign_up")
            : undefined;

          return response.status === 200 ? (
            "کد تائید شد ، کافیه اطلاعات خودتون رو وارد کنید ."
          ) : response.status === 400 ? (
            "خطایی در هنگام ارسال درخواست رخ داد . "
          ) : response.status === 404 ? (
            <div className="flex justify-between items-center gap-2">
              <p>به این شماره کدی ارسال نشده است .</p>
              <Button
                colorScheme="secondary"
                variant="outline"
                size="2xs"
                className="text-nowrap"
                onClick={() => router.push("/register/get_phone_number")}
              >
                ثبت مجدد شماره
              </Button>
            </div>
          ) : response.status === 422 ? (
            "کد وارد شده اشتباه است . "
          ) : response.status === 429 ? (
            "بارها تلاش کرده اید، باید صبر کنید . "
          ) : response.status === 440 ? (
            <div className="flex justify-between items-center gap-2">
              <p>کد منقضی شده است و باید دوباره شماره تون رو بفرسیتد.</p>
            </div>
          ) : response.status === 500 ? (
            "خطایی سمت سرور رخ داد !"
          ) : (
            "خطای ناشناس !"
          );
        },
      });
    } catch (error) {
      console.error("error:", error);
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type: "error",
        render() {
          return "خطایی رخ  داد .";
        },
      });
    }
  });

  return (
    <section className="bg-white px-5 py-10 rounded-2xl">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        شما واقعی هستید یا کیک ; -)
      </h1>
      <p className="text-sm font-normal text-gray-600 mb-7">
        برای ثبت شمارتون باید فرم زیر را پر کنید .
      </p>
      <p className="text-sm font-bold text-gray-600 mb-3 mr-2">
        کدی که با پیغام ارسال شده رو ،این زیر بنویسید.
      </p>
      <form onSubmit={handleSubmit(async () => await onSubmit())} className="">
        <LoginInputWrapper
          icon={<FiPhone />}
          errorMessage={formState.errors.code?.message}
        >
          <input
            className="pr-2 outline-none border-none grow focus:bg-transparent focus-visible:bg-transparent font-sans placeholder:text-sm placeholder:font-bold"
            type="number"
            placeholder="کد ارسالی"
            {...register("code", {
              minLength: {
                value: 5,
                message: "تعداد اعداد وارد شده کمتر از حد مجاز است.",
              },
              maxLength: {
                value: 5,
                message: "تعداد اعداد وارد شده بیشتر از حد مجاز است.",
              },
              required: "شماره رو وارد نکردین :)",
            })}
          />
        </LoginInputWrapper>
        <Button
          colorScheme="secondary"
          variant="fill"
          type="submit"
          size="sm"
          className="w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2"
        >
          قدم بعدی
        </Button>
      </form>
    </section>
  );
};

export default GetCode;
