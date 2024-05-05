"use server";
import { BsReplyFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { getAllComments } from "@/services/comment";
import Avatar from "./Avatar";
import Button from "./form/Button";
import { Comment } from "@/types/apiTypes";

async function getDateComments(productId: string) {
	try {
		const response = await getAllComments(productId);
		const data: Comment[] = response.data;
		return data;
	} catch (error) {
		console.error(":( error is  =>", error);
		return undefined;
	}
}

export default async function CommentsSection({ comments }: { comments: Comment[] }) {
	console.log("comments:", comments);
	return (
		<>
			<form>
				<h6 className="text-base font-bold text-neutral-700 mt-5 mb-2">نظر شما چی بوده ؟</h6>
				<div className="flex items-center px-3 py-2 rounded-lg bg-neutral-100 border-r border-neutral-400">
					<textarea
						id="comment"
						className="block mx-4 p-2.5 w-full text-sm text-neutral-900 bg-white rounded-lg border border-neutral-300  focus:ring-secondary-500 focus:border-secondary-500 outline-none"
						placeholder="نظرتون رو اینجا بنویسید..."
					/>
					<button
						type="submit"
						className="inline-flex justify-center p-2 text-secondary-600 rounded-full cursor-pointer hover:bg-secondary-100 transition-all">
						<svg
							className="w-5 h-5 rotate-90 rtl:-rotate-90"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 20">
							<path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
						</svg>
						<span className="sr-only">ارسال نظر</span>
					</button>
				</div>
			</form>
			<div className="comments-section w-full h-auto mt-3">
				<h6 className="text-base font-bold text-neutral-700 mt-5 mb-2">نظرات بقیه :</h6>
				<div className="comments-wrapper flex flex-col w-full h-auto ">
					<div className="comment flex gap-3 shadow-smshadow-neutral-700 bg-neutral-100 p-3 rounded-lg border-r border-neutral-400">
						<div className="avatar-wrapper w-14">
							<Avatar size="md" name="B" />
						</div>
						<div className="comment-content">
							<div className="comment-header flex justify-between h-fit pl-2 items-center">
								<div>
									<h4 className="text-base font-semibold text-secondary-600">بهار احمدی</h4>
									<h6 className="text-sm text-neutral-700 mr-1">مشتری</h6>
								</div>
								<span className="text-neutral-900 font-medium text-xs bg-neutral-200 px-2 py-px rounded-md">
									3 روز پیش
								</span>
							</div>
							<p className="mt-2 text-neutral-900 text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
								گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
								شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
								باشد.
							</p>
							<div className="btn-wrapper mt-3 flex gap-2">
								<Button
									colorScheme="primary"
									variant="outline"
									size="xs"
									type="button"
									className="flex items-center">
									<MdOutlineFavorite className="text-primary-600 text-xl" />
									<span>
										275 <span>نفر پسندیدند</span>
									</span>
								</Button>
								<Button
									colorScheme="secondary"
									size="xs"
									variant="outline"
									type="button"
									className="flex items-center">
									<BsReplyFill className="text-xl" />
									<span>
										150 <span> نظر دادند</span>
									</span>
								</Button>
							</div>
							<div className="comments-replied mr-2 mt-2 pr-4 border-r-2 border-neutral-300">
								{Array(2)
									.fill(9)
									.map((_, index) => (
										<div
											key={index}
											className="comment flex gap-3 bg-neutral-50 mt-2 p-3 rounded-lg">
											<div className="avatar-wrapper w-14">
												<Avatar size="sm" name="" />
											</div>
											<div className="comment-content">
												<div className="comment-header flex justify-between h-fit items-center">
													<div>
														<h4 className="text-base font-semibold text-secondary-600">
															خانوم دلاک
														</h4>
														<h6 className="text-sm text-neutral-700 mr-1">مدیر فروشگاه</h6>
													</div>
													<span className="text-neutral-900 font-medium text-xs bg-neutral-200 px-2 py-px rounded-md">
														3 روز پیش
													</span>
												</div>
												<p className="mt-2 text-neutral-900 text-sm font-medium">
													لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
													طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
													که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
													بهبود ابزارهای کاربردی می باشد.
												</p>
												<div className="btn-wrapper mt-3 flex gap-2">
													<Button
														colorScheme="primary"
														variant="outline"
														size="2xs"
														type="button"
														className="flex items-center">
														<MdOutlineFavorite className="text-primary-600 text-lg" />
														<span>
															275 <span>نفر پسندیدند</span>
														</span>
													</Button>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
