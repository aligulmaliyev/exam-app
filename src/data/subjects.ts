import { TSubject } from "../store/useSubjects";

export const subjects: TSubject[] = [
  {
    id: 1,
    name: "Economy",
    completed: true,
    children: [
      {
        id: 1,
        name: "Economic system",
      },
      {
        id: 2,
        name: "Unemployment",
      },
      {
        id: 3,
        name: "Industries",
      },
      {
        id: 4,
        name: "Agricultural products ",
        children: [
          {
            id: 1,
            name: "Location",
          },
          {
            id: 2,
            name: "Major cities",
          },
          {
            id: 3,
            name: "Terrain",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "History",
    completed: false,
    children: [
      {
        id: 1,
        name: "Key events",
      },

      {
        id: 2,
        name: "Colonization",
      },
    ],
  },
  {
    id: 3,
    name: "Geography",
    completed: true,
    children: [
      {
        id: 1,
        name: "Location",
      },
      {
        id: 2,
        name: "Major cities",
      },
      {
        id: 3,
        name: "Terrain",
      },
    ],
  },
  {
    id: 4,
    name: "Government & Politics",
    completed: true,
  },
];
