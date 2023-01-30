type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex center">
      <div>
        <img src={picture} className="w-16 h-16 rounded-full mr-4" alt={name} />
        <div className="text-xl font-bold">{name}</div>
      </div>
    </div>
  );
};

export default Avatar;
