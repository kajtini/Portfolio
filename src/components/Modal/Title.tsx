type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <div>
      <h2 className="text-3xl text-center sm:text-5xl ">{title}</h2>

      <hr className="my-5 opacity-10 text-center" />
    </div>
  );
}

export default Title;
