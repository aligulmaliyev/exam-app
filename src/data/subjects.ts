import { TSubject } from "../store/useSubjects";

export const subjects: TSubject[] = [
    {
      id: 1,
      name: "Welcome Orientation",
      completed: true,
      children: [
        {
          id: 1,
          name: "test subject 2",
        },
      ],
    },
    {
      id: 2,
      name: "Basic Financials - Overview and test data",
      completed: true,
      children: [
        {
          id: 1,
          name: "test subject 3",
        },
  
        {
          id: 2,
          name: "test subject 3",
        },
      ],
    },
    {
      id: 3,
      name: "Basic Financials - Forecast Sale",
      completed: true,
      children: [
        {
          id: 1,
          name: "test subject 3",
        },
      ],
    },
    {
      id: 4,
      name: "Expense Budget and Payroll,",
      completed: false,
    },
  ];