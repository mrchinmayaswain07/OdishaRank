import Link from "next/link";

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export function AuthFooter({
  text,
  linkText,
  linkHref,
}: AuthFooterProps) {
  return (
    <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
      <span>{text} </span>
      <Link
        href={linkHref}
        className="font-medium text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400"
      >
        {linkText}
      </Link>
    </div>
  );
}