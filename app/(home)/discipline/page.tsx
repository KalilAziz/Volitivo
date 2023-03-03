import { data } from "@/data";
import { Table } from "./Table";

const Discipline = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-3 my-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Disciplinas</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
      </div>
      <Table lists={data} />
    </div>
  );
};

export default Discipline;
