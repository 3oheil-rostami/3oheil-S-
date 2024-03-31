"use client";
import { useEffect, useState } from "react";

const Timer = ({ initialSeconds = 0 }: { initialSeconds: number }) => {
	const [secondsRemaining, setSecondsRemaining] = useState<number>(initialSeconds);

	// effect with its type annotation
	useEffect(() => {
		const interval = setInterval(() => {
			if (secondsRemaining > 0) {
				setSecondsRemaining(prevSeconds => prevSeconds - 1);
			} else {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval); // cleanup on unmount
	}, [secondsRemaining]);

	// Function with its type annotation
	const getFormattedTime = (
		seconds: number
	): { hours: number; minutes: number; remainingSeconds: number; days: number } => {
		const days: number = Math.floor(seconds / 24 / 60 / 60);
		const hours: number = Math.floor(seconds / 3600 - days * 24);
		const minutes: number = Math.floor((seconds % 3600) / 60);
		const remainingSeconds: number = seconds % 60;

		return { hours, minutes, remainingSeconds, days };
	};

	return (
		<div className='timer-container flex items-center justify-center gap-1 *:w-10 *:h-14 *:rounded-sm *:bg-primary-400 *:text-neutral-50 *:p-2 *:flex *:flex-col *:items-center *:justify-center *:text-xl font-extrabold'>
			<span className='animate'>
				<span>
					{getFormattedTime(secondsRemaining).remainingSeconds.toString().padStart(2, "0")}
				</span>
				<span className='text-sm'>ثانیه</span>
			</span>
			<span className='animate'>
				<span>{getFormattedTime(secondsRemaining).minutes.toString().padStart(2, "0")}</span>
				<span className='text-sm'>دقیقه</span>
			</span>
			<span className='animate'>
				<span>{getFormattedTime(secondsRemaining).hours.toString().padStart(2, "0")}</span>
				<span className='text-sm'>ساعت</span>
			</span>
			<span className='animate'>
				<span>{getFormattedTime(secondsRemaining).days.toString().padStart(2, "0")}</span>
				<span className='text-sm'>روز</span>
			</span>
		</div>
	);
};
export default Timer;
