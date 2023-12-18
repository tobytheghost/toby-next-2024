type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={`text-center text-4xl font-semibold ${className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`relative mb-8 pb-2 text-center text-3xl font-semibold after:absolute after:bottom-0 after:left-[50%] after:w-[50%] after:translate-x-[-50%] after:border-b-4 after:border-black ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={`mb-4 text-center text-2xl font-semibold ${className}`}>
      {children}
    </h3>
  );
};

export const P = ({ children, className }: TypographyProps) => {
  return <p className={`mb-4 ${className}`}>{children}</p>;
};
