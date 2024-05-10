import { Comment } from "@/types/apiTypes";
import React from "react";
import MyAvatar from "./MyAvatar";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "./form/Button";
import { BsReplyFill } from "react-icons/bs";

const CommentItem = ({ ...comItem }: Comment) => {
	return (
		<>
			<div className="comment flex gap-3 shadow-smshadow-neutral-700 bg-neutral-100 p-3 rounded-lg border-r border-neutral-400">
				<div className="avatar-wrapper w-14">
					<MyAvatar size="md" name="B" />
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
					<p className="mt-2 text-neutral-900 text-sm font-medium">{comItem.body}</p>
					<div className="btn-wrapper mt-3 flex gap-2">
						<Button
							colorScheme="primary"
							variant="outline"
							size="xs"
							type="button"
							className="flex items-center">
							<MdOutlineFavorite className="text-primary-600 text-xl" />
							<span>
								{comItem.like.length || 0} <span>نفر پسندیدند</span>
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
								{comItem.replies.length || 0} <span> پاسخ دادند</span>
							</span>
						</Button>
					</div>
					<div className="comments-replied mr-2 mt-2 pr-4 border-r-2 border-neutral-300">
						{comItem.replies.map(repItem => (
							<div
								key={repItem._id}
								className="comment flex gap-3 bg-neutral-50 mt-2 p-3 rounded-lg">
								<div className="avatar-wrapper w-14">
									<MyAvatar size="sm" name={repItem.user} />
								</div>
								<div className="comment-content">
									<div className="comment-header flex justify-between h-fit items-center">
										<div>
											<h4 className="text-base font-semibold text-secondary-600">خانوم دلاک</h4>
											<h6 className="text-sm text-neutral-700 mr-1">مدیر فروشگاه</h6>
										</div>
										<span className="text-neutral-900 font-medium text-xs bg-neutral-200 px-2 py-px rounded-md">
											3 روز پیش
										</span>
									</div>
									<p className="mt-2 text-neutral-900 text-sm font-medium">{repItem.body}</p>
									<div className="btn-wrapper mt-3 flex gap-2">
										<Button
											colorScheme="primary"
											variant="outline"
											size="2xs"
											type="button"
											className="flex items-center">
											{repItem.isLiked ? (
												<MdOutlineFavorite className="text-primary-600 text-lg" />
											) : (
												<MdOutlineFavoriteBorder />
											)}
											<span>
												{repItem.like.length} <span>نفر پسندیدند</span>
											</span>
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CommentItem;
