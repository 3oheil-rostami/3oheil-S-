"use client";
import React, { BaseSyntheticEvent, useState } from "react";
import Button from "@/components/form/Button";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { MdLock, MdOutlinePassword, MdPhone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
      <p className="text-sm font-normal text-gray-600 mb-10 mt-3">
        درک می کنیم که بخاطر گرفتاری ها یه سری چیزا فراموش میشوند .
      </p>
      <p className="text-sm font-bold text-gray-600 mb-3 mr-2">
        اول شماره خود را وارد کنید و دکمه بغلش را بزنید تا کد براتون ارسال شود
        بعد میتوانید ادامه دهید.
      </p>
      <form className="" onSubmit={submitSendPhoneNumberHandler}>
        <LoginInputWrapper
          isDisabled={isEnableOtherForm}
          icon={<MdPhone />}
          errorMessage={phoneNumberFormState.errors.number?.message}
        >
          <div className="flex items-center">
            <input
              className="pr-2 outline-none border-none font-sans grow placeholder:text-sm placeholder:font-bold"
              type="text"
              placeholder="شماره تلفن"
              {...phoneNumberRegister("number", {
                pattern: {
                  value: /^09\d{9}$/,
                  message: "ابتدای شماره را به این شکل وارد کنید :0912 ",
                },
                required: "شماره رو وارد نکردین :)",
                disabled: isEnableOtherForm,
              })}
            />
            <Button
              colorScheme="secondary"
              type="submit"
              typeBtn="text"
              variant="fill"
              size="2xs"
            >
              ارسال کد
            </Button>
          </div>
        </LoginInputWrapper>
      </form>
      <form onSubmit={submitSendOtherFormHandler}>
        <LoginInputWrapper
          isDisabled={!isEnableOtherForm}
          icon={<MdOutlinePassword />}
          errorMessage={otherFormState.errors.code?.message}
        >
          <input
            className="pr-2 outline-none border-none font-sans placeholder:text-sm placeholder:font-bold"
            type="text"
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
        </LoginInputWrapper>
        <LoginInputWrapper
          isDisabled={!isEnableOtherForm}
          icon={<MdLock />}
          errorMessage={otherFormState.errors.password?.message}
        >
          <input
            className="pr-2 outline-none border-none font-sans placeholder:text-sm placeholder:font-bold"
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
        </LoginInputWrapper>
        <LoginInputWrapper
          isDisabled={!isEnableOtherForm}
          icon={<MdLock />}
          errorMessage={otherFormState.errors.confirmPassword?.message}
        >
          <input
            className="pr-2 outline-none border-none font-sans placeholder:text-sm placeholder:font-bold"
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
        </LoginInputWrapper>
        <Button
          colorScheme="secondary"
          variant="fill"
          type="submit"
          size="sm"
          disabled={!isEnableOtherForm}
          className={`w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2 ${
            !isEnableOtherForm ? "opacity-40" : ""
          }`}
        >
          ورود
        </Button>
      </form>
      <div className="flex items-center justify-between px-2 gap-3"></div>
    </div>
  );
};

export default Register;
