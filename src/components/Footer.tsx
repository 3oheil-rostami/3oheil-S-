import React, { memo } from "react";
import Button from "./form/Button";
import Image from "next/image";
import { BiArrowToTop } from "react-icons/bi";
import logo from "@/../public/images/images.jpeg";
import feature1 from "@/../public/images/days-return.svg";
import feature2 from "@/../public/images/cash-on-delivery.svg";
import feature3 from "@/../public/images/express-delivery.svg";
import feature4 from "@/../public/images/support.svg";
import feature5 from "@/../public/images/original-products.svg";
import eanemad from "@/../public/images/samandehi.png";
import { TiSocialFacebook, TiSocialGithub, TiSocialSkype, TiSocialTwitter } from "react-icons/ti";
import Input from "./form/Input";
import Link from "next/link";
const Footer = () => {
	const features = [feature1, feature2, feature3, feature4, feature5];
	return (
		<div className="w-full border-t-4 border-secondary-200 mt-10">
			<div className="container-wrapper mx-auto ">
				<div className="top-section flex justify-between items-center">
					<div className="grow flex flex-col gap-y-1">
						<div className="">
							<Image src={logo.src} alt="logo" width={100} height={100} className="" />
						</div>
						<div className="">
							<span className="px-3 border-l-4 border-secondary-300">
								تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
							</span>
							<span className="px-3"> ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
						</div>
					</div>
					<div className="">
						<Button colorScheme="primary" typeBtn="text" variant="outline" size="md">
							<Link href={"#top"} className="flex items-center gap-1">
								برو به بالا <BiArrowToTop />
							</Link>
						</Button>
					</div>
				</div>
				<div className="features py-7 flex items-center justify-evenly gap-2">
					{features.map((image, index) => (
						<figure
							key={index}
							className="flex flex-col  items-center justify-center hover:animate-pulse">
							<Image src={image.src} width={75} height={75} alt="feature" />
							<figcaption>متن فیچر</figcaption>
						</figure>
					))}
				</div>
				<div className="flex justify-between items-start pb-4 mt-8 border-b-4 border-primary-100">
					<div className="flex">
						{Array(2)
							.fill(3)
							.map((value, index) => (
								<div key={index} className="w-96">
									<div className="header-text font-bold text-lg text-neutral-900">
										با ما باشید .
									</div>
									<div className="mr-2 mt-2">
										<nav>
											<ul className="text-neutral-800">
												<li>اتاق خبرمون </li>
												<li>در مورد فروشمون</li>
												<li>فرصت های شغلیمون</li>
												<li>گزارشهای تخلف</li>
												<li>تماس با ما</li>
												<li>دباره ما</li>
											</ul>
										</nav>
									</div>
								</div>
							))}
					</div>
					<div className="w-96">
						<span className="text-header text-lg font-bold text-neutral-900 ">
							ما رو دنبال کنید .
						</span>
						<div className="social-medias flex justify-center items-center gap-x-4 text-4xl mt-2 text-neutral-800 ">
							<span>
								<TiSocialFacebook />
							</span>
							<span>
								<TiSocialSkype />
							</span>
							<span>
								<TiSocialGithub />
							</span>
							<span>
								<TiSocialTwitter />
							</span>
						</div>
						<div className="mt-5">
							<h6 className="text-neutral-900 text-md mr-2">
								با ثبت ایمیل از جدید ترین تخفیف ها با خبر شوید :)
							</h6>
							<div className="flex items-center gap-2 mt-2">
								<Input placeholder="ایمیل خود را وارد کنید ." className="shadow-md" />
								<Button colorScheme="primary" typeBtn="text" variant="fill" size="sm">
									ثبت
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-start">
					<div className="about-us mt-3 w-3/4">
						<h6 className="text-xl text-neutral-800 font-semibold">
							فروشگاه اینترنتی لوازم آرایشی و بهداشتی ،بررسی انتخاب و خرید آنلاین{" "}
						</h6>
						<p className="text-sm text-neutral-900 from-neutral-800 mt-2 mr-1">
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
							گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
							شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
							طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
							فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
							موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
							دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
							گیرد
						</p>
					</div>
					<div className="honors flex items-center gap-10 px-4">
						<figure>
							<Image
								width={100}
								height={150}
								src={eanemad.src}
								alt="eanemad"
								className="min-w-fit"
							/>
						</figure>
						<figure>
							<Image width={100} height={150} src={eanemad.src} alt="" className="min-w-fit" />
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Footer);
