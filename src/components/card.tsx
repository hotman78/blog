type Props = {
  children?: React.ReactNode;
  css: string;
};

const Card = ({ children, css }: Props) => {
  return (
    <>
      <div className={`${css}`}>
        <div className="flex flex-col sticky top-6">
          <div className="p-6 shadow-md rounded-xl lg:mb-6 bg-accent-1 dark:bg-dark-accent-1">
            <div className="container mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
