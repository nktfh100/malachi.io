type ContactCardProps = {
  link: string;
  icon: React.ReactNode;
  children: string;
};

export const SocialCard = ({ link, icon, children }: ContactCardProps) => {
  return (
    <div>
      <a
        href={link}
        className="font-bold text-2xl md:text-3xl text-ctp-sapphire flex items-center space-x-2 hover:text-ctp-mauve transition-colors duration-300"
        target="_blank"
      >
        {icon}
        <span>{children}</span>
      </a>
    </div>
  );
};
