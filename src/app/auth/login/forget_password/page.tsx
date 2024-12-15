"use client";
import Input2 from "@/components/form/Input2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { MdLock, MdOutlinePassword } from "react-icons/md";
import { toast } from "react-toastify";

type FormValues = {
  code: string;
  password: string;
  confirmPassword: string;
};
type phoneNumberFormValue = {
  number: string;
};

const Register = () => {
  // states
  const [isEnableOtherForm, setIsEnableOtherForm] = useState<boolean>(false);
  const router = useRouter();

  // functions for phoneNumber form
  const {
    register: phoneNumberRegister,
    handleSubmit: phoneNumberHandleSubmit,
    watch: phoneNumberWatch,
    formState: phoneNumberFormState,
  } = useForm<phoneNumberFormValue>();

  const submitSendPhoneNumberHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    phoneNumberOnSubmit(e);
  };

  const phoneNumberOnSubmit = phoneNumberHandleSubmit(async (formData) => {
    if (!navigator.onLine) {
      toast.warning("شما آنلاین نیستید .");
      return;
    }
    const toastId = toast.loading("در حال ارسال درخواست ...");
    try {
      const response = await handleSendPhoneNumber({
        number: formData.number,
      });
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type: response.ok ? "success" : "error",
        render() {
          response.status === 200 && setIsEnableOtherForm(true);
          return response.status === 500
            ? "خطایی در سرور رخ داده است ."
            : response.status === 429
              ? "کد تایید به تازگی ارسال شد، باید منتظر بمانید !"
              : response.status === 404
                ? "حسابی با این شماره پیدا نشد ."
                : response.status === 400
                  ? "خطایی  در هنگام ارسال درخواست رخ داد ."
                  : response.status === 200
                    ? "کد به شماره تلفن شما ارسال شد ، حالا میتونید بقیه فیلد هارا پر کنید."
                    : "خطای ناشناس :/";
        },
      });
    } catch (error) {
      console.error("error", error);
      toast.update(toastId, {
        isLoading: false,
        autoClose: 3000,
        type: "error",
        render() {
          return "خطایی رخ داد .";
        },
      });
    }
  });
  async function handleSendPhoneNumber({
    number,
  }: {
    number: string;
  }): Promise<Response> {
    return fetch(
      process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_BACKEND_URL + "/user/forget",
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number }),
      }
    );
  }

  //  functions for other data form !!!
  const {
    register: otherRegister,
    handleSubmit: otherHandleSubmit,
    watch: otherWatch,
    formState: otherFormState,
  } = useForm<FormValues>();

  const submitSendOtherFormHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    otherFormOnSubmit(e);
  };

  const otherFormOnSubmit = otherHandleSubmit(
    async ({ code, confirmPassword, password }) => {
      if (!navigator.onLine) {
        toast.warning("شما آنلاین نیستید .");
        return;
      }
      const toastId = toast.loading("در حال ارسال درخواست ...");
      try {
        const response = await handleSendOtherData({
          code,
          password,
          confirmPassword,
          number: phoneNumberWatch("number"),
        });
        toast.update(toastId, {
          isLoading: false,
          autoClose: 3000,
          type: response.ok ? "success" : "error",
          render() {
            response.status === 200 && router.replace("/auth/login");
            return response.status === 500
              ? "خطایی در سرور رخ داده است ."
              : response.status === 404
                ? "به این شماره کدی ارسال نشده است"
                : response.status === 403
                  ? "شما به دفعات کد تایید را اشتباه وارد کرده اید بعدا دوباره تلاش کنید ."
                  : response.status === 401
                    ? "کد وارد شده با کد ارسالی تطابق ندارد ."
                    : response.status === 400
                      ? "مدت زمان کد تایید تمام شده دوباره تلاش کنید ."
                      : response.status === 200
                        ? "رمز با موفقیت تغییر یافت ، شما به صفحه ورود هدایت میشوید."
                        : "خطای ناشناس :/";
          },
        });
      } catch (error) {
        console.error("error:", error);
        toast.update(toastId, {
          isLoading: false,
          autoClose: 3000,
          type: "error",
          render() {
            return "خطایی رخ داد .";
          },
        });
      }
    }
  );

  async function handleSendOtherData({
    ...data
  }: {
    number: string;
    code: string;
    password: string;
    confirmPassword: string;
  }): Promise<Response> {
    return fetch(
      process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_BACKEND_URL +
      "/user/verifyForgetCode",
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );
  }

  return (
    <div className="bg-white px-5 py-10 rounded-2xl max-w-96">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        بازیابی رمز عبور
      </h1>
      <p className="text-sm font-bold text-gray-600 my-3 mr-2">
        اول شماره خود را وارد کنید و دکمه بغلش را بزنید تا کد براتون ارسال شود
        بعد میتوانید ادامه دهید.
      </p>
      <form onSubmit={submitSendPhoneNumberHandler}>
        <Input2
          disabled={isEnableOtherForm}
          // icon={<MdPhone className="!min-w-4" />}
          errorMessage={phoneNumberFormState.errors.number?.message}
          placeholder="شماره تلفن"
          {...phoneNumberRegister("number", {
            pattern: {
              value: /^09\d{9}$/,
              message: "ابتدای شماره را به این شکل وارد کنید :0912 ",
            },
            required: "شماره رو وارد نکردین :)",
            disabled: isEnableOtherForm,
          })}
          button={
            <button className="h-fit min-h-fit py-1 btn btn-primary ">
              ارسال کد
            </button>
          }
        />
      </form>

      <form onSubmit={submitSendOtherFormHandler}>
        <Input2
          disabled={!isEnableOtherForm}
          icon={<MdOutlinePassword />}
          errorMessage={otherFormState.errors.code?.message}
          placeholder="کد ارسالی"
          {...otherRegister("code", {
            required: { value: true, message: "کد ارسالی را وارد نکردید !" },
            minLength: {
              value: 5,
              message: "کد وارد شده کمتر از 5 کاراکتر است.",
            },
            maxLength: {
              value: 5,
              message: "کد وارد شده بیشتر از 5 کاراکتر است.",
            },
            disabled: !isEnableOtherForm,
          })}
        />

        <Input2
          disabled={!isEnableOtherForm}
          icon={<MdLock />}
          errorMessage={otherFormState.errors.password?.message}
          type="password"
          placeholder="رمز عبور"
          {...otherRegister("password", {
            required: { value: true, message: "رمز عبور الزامیست !" },
            minLength: {
              value: 8,
              message: "رمز عبور نباید کمتر از 8 کاراکتر باشد .",
            },
            maxLength: {
              value: 25,
              message: "رمز عبور نباید بیشتر از 25 کاراکتر باشد .",
            },
            disabled: !isEnableOtherForm,
          })}
        />

        <Input2
          disabled={!isEnableOtherForm}
          icon={<MdLock />}
          errorMessage={otherFormState.errors.confirmPassword?.message}
          type="password"
          placeholder="تکرار رمز عبور "
          {...otherRegister("confirmPassword", {
            required: { value: true, message: "تکرار رمز عبور الزامیست !" },
            minLength: {
              value: 8,
              message: "تکرار رمز عبور نباید کمتر از 8 کاراکتر باشد .",
            },
            maxLength: {
              value: 25,
              message: "تکرار رمز عبور نباید بیشتر از 25 کاراکتر باشد .",
            },
            validate: (inputValue) => {
              if (otherWatch("password") !== inputValue) {
                return "با رمز عبور مطابقت ندارد .";
              }
            },
            disabled: !isEnableOtherForm,
          })}
        />

        <button
          disabled={!isEnableOtherForm}
          className={'btn btn-primary w-full mt-4'}
        >
          ورود
        </button>

        <span className="divider"></span>

        <div className="flex items-center justify-between px-2 gap-3 mt-2">
          <Link
            href={"/auth/login"}
            className="btn btn-secondary btn-outline min-h-fit h-fit py-1 "
          >
            ورود
          </Link>
          <Link
            href={'/auth/register/get_phone_number'}
            className="btn btn-primary btn-outline min-h-fit h-fit py-1 "
          >
            ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
