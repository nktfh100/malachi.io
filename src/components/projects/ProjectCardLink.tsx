type ProjectCardLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const ProjectCardLink = ({ to, children }: ProjectCardLinkProps) => {
  return (
    <a
      href={to}
      className="text-ctp-blue hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
