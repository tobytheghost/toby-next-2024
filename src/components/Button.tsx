import Link from "next/link";

type ReactLinkProps = React.ComponentProps<typeof Link>;
type ReactButtonProps = React.ComponentProps<"button">;

type ButtonProps = ReactLinkProps | ReactButtonProps;

const isLink = (props: ButtonProps): props is ReactLinkProps => {
  return (props as ReactLinkProps).href !== undefined;
};

const isButton = (props: ButtonProps): props is ReactButtonProps => {
  return (props as ReactButtonProps).onClick !== undefined;
};

const ButtonComponent = ({ children, ...props }: ButtonProps) => {
  if (isLink(props)) return <Link {...props}>{children}</Link>;
  if (isButton(props)) return <button {...props}>{children}</button>;
  return null;
};

export const YellowButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonComponent
      className="group relative top-[2px] inline-block w-auto  rounded-md bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md  bg-yellow-500 px-5 py-2 text-center font-semibold active:-translate-y-0.5 active:transition-all active:duration-100 group-hover:-translate-y-1.5">
        {children}
      </span>
    </ButtonComponent>
  );
};

export const WhiteButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonComponent
      className="group relative top-[2px] inline-block w-auto rounded-md bg-yellow-700 text-center text-black"
      {...props}
    >
      <span className="relative mx-[-1.5px] block w-auto -translate-y-1 select-none rounded-md  bg-gray-50 px-5 py-2 text-center font-semibold active:-translate-y-0.5 active:transition-all active:duration-100 group-hover:-translate-y-1.5">
        {children}
      </span>
    </ButtonComponent>
  );
};
