export const layouts = [
    {
      id: 1,
      name: "Resume Layout 1",
      template: `
        "header header"
        "education experience"
        "footer footer"
      `,
      items: [
        { id: 1, area: "header", bgColor: "red" },
        { id: 2, area: "education", bgColor: "green" },
        { id: 3, area: "experience", bgColor: "blue" },
        { id: 4, area: "footer", bgColor: "yellow" },
      ],
    },
    {
      id: 2,
      name: "Resume Layout 2",
      template: `
        "header header"
        "experience education"
        "footer footer"
      `,
      items: [
        { id: 1, area: "header", bgColor: "purple" },
        { id: 2, area: "profile", bgColor: "orange" },
        { id: 3, area: "skills", bgColor: "teal" },
        { id: 4, area: "footer", bgColor: "pink" },
      ],
    },
  ];
  