type TechCardProps = {
  name: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const TechCard = ({ name, icon, children }: TechCardProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-md bg-white p-4 shadow-md">
      <h4 className="flex items-center gap-2 font-semibold">
        {icon} <span>{name}</span>
      </h4>
      <p>{children}</p>
    </div>
  );
};
