import clsx from "clsx";
import Link from "next/link";

const people = [
  {
    discipline: "portugues",
    questions: 1346541,
    commented: 54651565,
  },
  {
    discipline: "matematica",
    questions: 1346541,
    commented: 54651565,
  },
  {
    discipline: "quimica",
    questions: 1346541,
    commented: 54651565,
  },
];

export const Table = () => {
  return (
    <div className="px-6 lg:px-8 py-6 lg:py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Disciplinas</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <ul className="grid grid-cols-3">
              <li className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Disciplinas
              </li>
              <li className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                Questões
              </li>

              <li className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                Comentadas
              </li>
            </ul>
            <ul className="bg-white">
              {people.map((value, index) => (
                <Link
                  href={`/discipline/${value.discipline}`}
                  key={index}
                  className={clsx(index % 2 === 0 ? undefined : "bg-gray-50")}
                >
                  <li className="grid grid-cols-3 border-y">
                    <div className=" text-left px-3 py-4 text-sm text-gray-800 font-bold">
                      {value.discipline}
                    </div>
                    <div className=" text-center px-3 py-4 text-sm text-gray-500">
                      {value.questions}
                    </div>

                    <div className=" text-center px-3 py-4 text-sm text-gray-500">
                      {value.commented}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
