import Link from "next/link";

type StackCardProps = {
  name: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
};

export const StackCard = ({ name, icon, children, href }: StackCardProps) => {
  if (href) {
    return (
      <Link href={href}>
        <div className="flex h-full w-full flex-col gap-2 rounded-md bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
          <h4 className="flex items-center gap-2 text-lg font-semibold underline">
            {icon} <span>{name}</span>
          </h4>
          {children && <p className="text-sm">{children}</p>}
        </div>
      </Link>
    );
  }
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <h4 className="flex items-center gap-2 text-lg font-semibold">
        {icon} <span>{name}</span>
      </h4>
      {children && <p className="text-sm">{children}</p>}
    </div>
  );
};
