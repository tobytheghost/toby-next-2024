import Link from "next/link";

type LinkProps = React.ComponentProps<typeof Link>;
type ButtonProps = React.ComponentProps<"button">;

export const YellowClickyLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-yellow-500 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </Link>
  );
};

export const WhiteClickyLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-gray-100 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </Link>
  );
};

export const YellowClickyButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-yellow-500 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </button>
  );
};

export const WhiteClickyButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-gray-100 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </button>
  );
};
