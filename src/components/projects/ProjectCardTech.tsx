type ProjectCardTechProps = {
  children: React.ReactNode;
};

export const ProjectCardTech = ({ children }: ProjectCardTechProps) => {
  return (
    <span className="bg-ctp-overlay0 text-ctp-text px-2 py-1 rounded">
      {children}
    </span>
  );
};
