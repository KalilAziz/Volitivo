"use client";

import { data } from "@/data";
import { CollapsibleItem } from './CollapsibleItem';


type DisciplinePageProps = {
  params: {
    id: string;
  };
};

const DisciplinePage = ({ params }: DisciplinePageProps) => {
  const dataFind = data.find((item) => item.name === params.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <h1 className="text-4xl text-center px-4 py-3">{dataFind?.name}</h1>
      {dataFind?.themes.map((item) => {
        return (
         <CollapsibleItem key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default DisciplinePage;
