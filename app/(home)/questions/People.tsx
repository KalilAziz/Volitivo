type PeopleProps = {
  name: string;
  idade: number | string;
};

export const People = ({ name, idade }: PeopleProps) => {
  return (
    <div>
      name - {name} - {idade}
    </div>
  );
};
