let degrees = d3.hierarchy({
  name: "root",
  children: [
    { name: "English" },
    {
      name: "Psychology",
      children: [
        { name: "Clinical Psychology" },
        { name: "Cognitive Psychology" },
        { name: "General Psychology" }
      ]
    },
    {
      name: "Science",
      children: [
        {
          name: "Chemistry",
          children: [
            { name: "Organic Chemistry" },
            { name: "Inorganic Chemistry" },
            { name: "Biochemistry" }
          ]
        },
        { name: "Earth Science" },
        { name: "Biology" }
      ]
    }
  ]
})