import PricingCard from "@/components/user/PricingCard";

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex gap-3">
			<div className="grow">{children}</div>
			<PricingCard />
		</div>
	);
}
