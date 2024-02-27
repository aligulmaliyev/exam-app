import { TQuestions } from "../types";

export const questions: TQuestions[] = [
  {
    id: 1,
    questionText: `<p>Azərbaycan Respublikasının Mülki Məcəlləsində və ya müqavilədə ayrı qayda nəzərdə tutulmayıbsa, yaxud öhdəliyin mahiyyətindən hər hansı ayrı irəli gəlmirsə, üçüncü şəxsin xeyrinə bağlanmış müqavilənin icrasını kim tələb edə bilər?</p>`,
    answerOptions: {
      type: "multi-select",
      answerLineType: "text",
      answers: [
        {
          id: 1,
          answer: "Kreditor, borclu və üçüncü şəxs",
        },
        {
          id: 2,
          answer: "Borclu və üçüncü şəxs",
        },
        {
          id: 3,
          answer: "Yalnız kreditor",
        },
        {
          id: 4,
          answer: "Kreditor və üçüncü şəxs",
        },
        {
          id: 5,
          answer: "Yalnız borclu",
        },
      ],
    },
  },
  {
    id: 3,
    questionText: `<b>İlkin müqavilə ilə bağlı aşağıdakı müddəalardan doğru olanlarını seçin:</b>
  <p>1. İlkin müqavilədə əsas müqavilənin predmetini, habelə digər mühüm şərtlərini müəyyənləşdirməyə imkan verən şərtlər göstərilməlidir.</p>
  <p>2. Niyyət razılaşmasında (niyyət protokolunda və s.) tərəflərin ona ilkin müqavilə qüvvəsi vermək iradəsi birbaşa ifadə olunmayıbsa, o, mülki hüquq nəticələri doğurmur;</p>
  <p>3. İlkin müqavilənin formasına dair qaydalara əməl edilməməsi onun əhəmiyyətsizliyinə səbəb olmur;</p>
  <p>4. Yalnız əsas müqavilə tərəflərin onu bağlamalı olduğu müddət qurtarana qədər bağlanmadığı təqdirdə ilkin müqavilədə nəzərdə tutulmuş öhdəliklərə xitam verilir;</p>
  <p>5. İlkin müqavilə müvafiq icra hakimiyyəti orqanının razılığı ilə əsas müqavilə üçün nəzərdə.tutulmuş formada bağlanır;</p>
  <p>6. Əgər ilkin müqavilədə əsas müqavilənin hansı müddətdə müəyyənləşdirilməyibsə, əsas müqavilə ilkin müqavilənin bağlandığı andan bir  müddətində bağlanmalıdır.</p>
    `,
    answerOptions: {
      type: "single-select",
      answerLineType: "text",
      answers: [
        {
          id: 1,
          answer: "1, 3, 6",
        },
        {
          id: 2,
          answer: "2, 3, 4",
        },
        {
          id: 3,
          answer:
            "1, 2, 6",
        },
        {
          id: 4,
          answer: "2, 3, 5",
        },
        {
          id: 5,
          answer: "1, 2, 5",
        },
      ],
    },
  },
  {
    id: 2,
    questionText:`
    <p>Diqqətlə baxın! 2 şəkil arasında fərq var?</p>
    <img src="https://www.ilk.az/uploads/test-thumbs-original/ilk-baxisda-asan-gorunen-9-sekilli-mentiq-suali-41744.jpg" />
    `,
    answerOptions: {
      type: "single-select",
      answerLineType: "text",
      answers: [
        {
          id: 1,
          answer: "Bəli, var!",

        },
        {
          id: 2,
          answer: "Xeyr, yoxdur!",
        },
      ],
    },
  },
  {
    id: 4,
    questionText:`
    <img src='https://avtosfer.az/upload/news/c9bf87.jpg'/>
    `,
    answerOptions: {
      type: "single-select",
      answerLineType: "image",
      answers: [
        {
          id: 1,
          answer: 'https://files.modern.az/articles/2019/12/18/357837.jpg',
        },
        {
          id: 2,
          answer: 'https://files.modern.az/articles/2019/12/18/357837.jpg',
        },
        {
          id: 3,
          answer: 'https://files.modern.az/articles/2019/12/18/357837.jpg',
        },
        {
          id: 4,
          answer: 'https://files.modern.az/articles/2019/12/18/357837.jpg',
        },
      ],
    },
  },
  {
    id: 5,
    questionText: `7200 bit/san sürətlə işləyən modem 3600 baytlıq
    informasiyanı neçə saniyəyə ötürə bilər?`,
    answerOptions: {
      type: "essay",
      answerLineType: "text",
    },
  },
];
