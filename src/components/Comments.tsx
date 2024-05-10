"use server";
import { getAllComments } from "@/services/comment";
import { Comment } from "@/types/apiTypes";
import CommentItem from "./CommentItem";
import Image from "next/image";
import commentsIsEmptyImg from "@/../public/images/no-comment.svg";

// async function getDateComments(productId: string) {
// 	try {
// 		const response = await getAllComments(productId);
// 		const data: Comment[] = response.data;
// 		return data;
// 	} catch (error) {
// 		console.error(":( error is  =>", error);
// 		return undefined;
// 	}
// }

export default async function CommentsSection({ comments }: { comments: Comment[] }) {
	// console.log("comments:", comments);
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
					{comments.length === 0 ? (
						<div className="flex flex-col gap-2 items-center justify-center">
							<Image
								src={commentsIsEmptyImg.src}
								width={250}
								height={250}
								alt="نظری ثبت نشده است ."
								className="opacity-75"
							/>
							<p className="text-lg font-bold text-neutral-800">نظری ثبت نشده است .</p>
						</div>
					) : (
						comments.map(commentItem => <CommentItem key={commentItem._id} {...commentItem} />)
					)}
				</div>
			</div>
		</>
	);
}
