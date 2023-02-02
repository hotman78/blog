type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <>
      <div className="block max-w-4xl">
        <div className="flex flex-col sticky top-6">
          <div className="p-6 shadow-md rounded-xl lg:mb-6 bg-accent-1 ">
            <div className="container mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
