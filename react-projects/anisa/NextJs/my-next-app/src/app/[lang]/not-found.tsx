import Link from "next/link";
import { Button } from "@/components/ui/button";

// Rendered inside app/[lang]/layout.tsx, so Header/Footer stay visible.
// Kept locale-neutral: not-found.tsx cannot read params in Next 16.
export default function NotFound() {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-6xl font-extrabold text-primary">404</p>
      <h1 className="text-2xl font-bold">
        Page not found · صفحه پیدا نشد
      </h1>
      <p className="max-w-md text-muted-foreground">
        Sorry, the page you are looking for doesn&apos;t exist.
        <br />
        متأسفانه صفحه‌ای که دنبال آن هستید وجود ندارد.
      </p>
      <Button asChild>
        <Link href="/">Back to home · بازگشت به خانه</Link>
      </Button>
    </div>
  );
}
