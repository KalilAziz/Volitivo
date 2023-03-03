import { Supplies } from "@/data";
import clsx from "clsx";
import Link from "next/link";

type TableProps = {
  lists: Supplies[];
};

export const Table = ({ lists }: TableProps) => {
  const ArrayNumber = [1, 2, 3, 4, 5];
  console.log("Essa é nossa Array Default: ", ArrayNumber);
  console.log("-----");
  const ArrayNumberMult = ArrayNumber.map((item) => item * 2);
  console.log("Essa é nossa Array Multiplicada: ", ArrayNumberMult);
  console.log("-----");
  const ArrayNumberFilter = ArrayNumber.filter((item) => item > 2);
  console.log("Essa é nossa Array Filtrada: ", ArrayNumberFilter);
  console.log("-----");

  return (
    <div>
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
              {lists?.map((list, index) => {
                const numberQuestions = list.themes.map((item) => {
                  const numberQuestion = item.questions.length;
                  return numberQuestion;
                });

                const numberQuestionsComment = list.themes.map((item) => {
                  const numberQuestionComment = item.questions.filter(
                    (item) => item.comment !== ""
                  ).length;

                  return numberQuestionComment;
                });

                return (
                  <Link
                    key={list.id}
                    href={`/discipline/${list.name}`}
                    className={clsx(index % 2 === 0 ? undefined : "bg-gray-50")}
                  >
                    <li className="grid grid-cols-3 border-y">
                      <div className=" text-left px-3 py-4 text-sm text-gray-800 font-bold">
                        {list.name}
                      </div>
                      <div className=" text-center px-3 py-4 text-sm text-gray-500">
                        {numberQuestions[0]}
                      </div>

                      <div className=" text-center px-3 py-4 text-sm text-gray-500">
                        {numberQuestionsComment[0]}
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
