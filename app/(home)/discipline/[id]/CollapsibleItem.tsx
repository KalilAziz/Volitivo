"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Theme } from "@/data";
import { MinusIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

type CollapsibleItemProps = {
  item: Theme;
};

export const CollapsibleItem = ({ item }: CollapsibleItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log("item", item);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
      defaultOpen
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">{item.name}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? (
              <MinusIcon className="h-8 w-8" />
            ) : (
              <PlusCircleIcon className="h-8 w-8" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2">
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
          {item.questions?.map((question, index) => {
            // const numberQuestions = list.themes.map((item) => {
            //   const numberQuestion = item.questions.length;
            //   return numberQuestion;
            // });

            // const numberQuestionsComment = list.themes.map((item) => {
            //   const numberQuestionComment = item.questions.filter(
            //     (item) => item.comment !== ""
            //   ).length;

            //   return numberQuestionComment;
            // });

            return (
              <Link
                key={question.id}
                href={`/discipline/${question.name}`}
                className={clsx(index % 2 === 0 ? undefined : "bg-gray-50")}
              >
                <li className="grid grid-cols-3 border-y">
                  <div className=" text-left px-3 py-4 text-sm text-gray-800 font-bold">
                    {question.name}
                  </div>
                  <div className=" text-center px-3 py-4 text-sm text-gray-500"></div>

                  <div className=" text-center px-3 py-4 text-sm text-gray-500">
                    {/* {numberQuestionsComment[0]} */}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};
