type LinkProps = React.ComponentProps<"a">;
type ButtonProps = React.ComponentProps<"button">;

export const YellowClickyLink = ({ children, ...props }: LinkProps) => {
  return (
    <a
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-yellow-500 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </a>
  );
};

export const BlackClickyLink = ({ children, ...props }: LinkProps) => {
  return (
    <a
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-yellow-500"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-gray-950 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </a>
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

export const BlackClickyButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="relative top-[2px] inline-block w-auto rounded-md border-[1px] border-yellow-700 bg-yellow-700 text-center text-yellow-500"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md border-[1px] border-yellow-500 bg-gray-950 px-5 py-2 text-center font-semibold hover:-translate-y-1.5 active:-translate-y-0.5 active:transition-all active:duration-100">
        {children}
      </span>
    </button>
  );
};
