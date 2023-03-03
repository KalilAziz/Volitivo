export type Question = {
  id: number;
  name: string;
  question: string;
  answer: string;
  options: string[];
  comment?: string | null;
};

export type Theme = {
  id: number;
  name: string;
  questions: Question[];
};

export type Supplies = {
  id: number;
  name: string;
  themes: Theme[];
};

export const data = [
  {
    id: 1,
    name: "portugues",
    themes: [
      {
        id: 2,
        name: "Pronomes",
        subThemes: [
          {
            id: 1,
            name: "Pronomes objetivos111",
            questions: [
              {
                id: 1,
                name: "Pronomes objetivos",
                question: "Portugues question 1",
                answer: "como",
                options: ["como", "comi", "comer", "comia"],
                comment: "",
              },
              {
                id: 2,
                name: "Pronomes pessoais",
                question: "Portugues question 2",
                answer: "bebo",
                options: ["bebo", "bebi", "beber", "bebendo"],
                comment: "",
              },
              {
                id: 3,
                name: "Pronomes demonstrativos",
                question: "Portugues question 3",
                answer: "dormo",
                options: ["dormo", "dormi", "dormir", "dormindo"],
                comment: "",
              },
              {
                id: 4,
                name: "Pronomes indefinidos",
                question: "Portugues question 3",
                answer: "dormo",
                options: ["dormo", "dormi", "dormir", "dormindo"],
                comment: "",
              },
            ],
          },
          {
            id: 2,
            name: "Pronomes objetivos222",
            questions: [
              {
                id: 1,
                name: "Pronomes objetivos",
                question: "Portugues question 1",
                answer: "como",
                options: ["como", "comi", "comer", "comia"],
                comment: "",
              },
              {
                id: 2,
                name: "Pronomes pessoais",
                question: "Portugues question 2",
                answer: "bebo",
                options: ["bebo", "bebi", "beber", "bebendo"],
                comment: "",
              },
              {
                id: 3,
                name: "Pronomes demonstrativos",
                question: "Portugues question 3",
                answer: "dormo",
                options: ["dormo", "dormi", "dormir", "dormindo"],
                comment: "",
              },
              {
                id: 4,
                name: "Pronomes indefinidos",
                question: "Portugues question 3",
                answer: "dormo",
                options: ["dormo", "dormi", "dormir", "dormindo"],
                comment: "",
              },
            ],
          },
          {
            id: 3,
            name: "Pronomes objetivos333",
            questions: [
              {
                id: 1,
                name: "Pronomes objetivos",
                question: "Portugues question 1",
                answer: "como",
                options: ["como", "comi", "comer", "comia"],
                comment: "",
              },
              {
                id: 2,
                name: "Pronomes pessoais",
                question: "Portugues question 2",
                answer: "bebo",
                options: ["bebo", "bebi", "beber", "bebendo"],
                comment: "",
              },
              {
                id: 3,
                name: "Pronomes demonstrativos",
                question: "Portugues question 3",
                answer: "dormo",
                options: ["dormo", "dormi", "dormir", "dormindo"],
                comment: "",
              },
              {
                id: 4,
                name: "Pronomes indefinidos",
                question: "Portugues question 3",
                answer: "dormo",
                options: ["dormo", "dormi", "dormir", "dormindo"],
                comment: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
