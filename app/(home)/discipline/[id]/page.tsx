"use client";
import { Button } from "@/components/ui/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { MinusIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { ChevronsUpDown, Plus, PlusCircle, X } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { Table } from "../Table";

const lists = [
  {
    discipline: "portugues 1",
    questions: 1,
    commented: 1,
  },
  {
    discipline: "portugues 2",
    questions: 2,
    commented: 2,
  },
  {
    discipline: "portugues 3",
    questions: 3,
    commented: 3,
  },
];

const DisciplinePage = ({ params }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <h1 className="text-4xl text-center px-4 py-3">{params.id}</h1>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
        defaultOpen
      >
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">1. Ortografia</h4>
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
          <Table lists={lists} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default DisciplinePage;
