import { image } from "../constants";
import { TQuestions } from "../types";


export const questions: TQuestions[] = [
  {
    id: 1,
    questionText:
      "What is the main advantage of using a rolling budget instead of an annual budget?",
    answerOptions: {
      type: "multi-select",
      answerLineType: "text",
      answers: [
        {
          id: 1,
          answer: "It requires less effort to create.",
        },
        {
          id: 2,
          answer: "It provides a longer-term financial outlook.",
        },
        {
          id: 3,
          answer:
            "It allows for more flexibility in adapting to changing circumstances.",
        },
        {
          id: 4,
          answer: "It is a legal requirement for some businesses..",
        },
      ],
    },
  },
  {
    id: 2,
    questionText:
      "What is the main advantage of using a rolling budget instead of an annual budget?",
    answerOptions: {
      type: "multi-select",
      answerLineType: "image",
      answers: [
        {
          id: 1,
          answer: image,
        },
        {
          id: 2,
          answer: image,
        },
        {
          id: 3,
          answer: image,
        },
        {
          id: 4,
          answer: image,
        },
      ],
    },
  },
  {
    id: 3,
    questionText:
      "What is the main advantage of using a rolling budget instead of an annual budget?",
    answerOptions: {
      type: "single-select",
      answerLineType: "text",
      answers: [
        {
          id: 1,
          answer: "It requires less effort to create.",
        },
        {
          id: 2,
          answer: "It provides a longer-term financial outlook.",
        },
        {
          id: 3,
          answer:
            "It allows for more flexibility in adapting to changing circumstances.",
        },
        {
          id: 4,
          answer: "It is a legal requirement for some businesses..",
        },
      ],
    },
  },
  {
    id: 4,
    questionText:
      "What is the main advantage of using a rolling budget instead of an annual budget?",
    answerOptions: {
      type: "single-select",
      answerLineType: "image",
      answers: [
        {
          id: 1,
          answer: image,
        },
        {
          id: 2,
          answer: image,
        },
        {
          id: 3,
          answer: image,
        },
        {
          id: 4,
          answer: image,
        },
      ],
    },
  },
  {
    id: 5,
    questionText:
      "What is the main advantage of using a rolling budget instead of an annual budget?",
    answerOptions: {
      type: "essay",
      answerLineType: "text",
      answers: [
        {
          id: 1,
          answer: "It requires less effort to create.",
        },
        {
          id: 2,
          answer: "It provides a longer-term financial outlook.",
        },
        {
          id: 3,
          answer:
            "It allows for more flexibility in adapting to changing circumstances.",
        },
        {
          id: 4,
          answer: "It is a legal requirement for some businesses..",
        },
      ],
    },
  },
];
