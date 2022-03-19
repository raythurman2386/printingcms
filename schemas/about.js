export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      name: "date",
      title: "Date",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
