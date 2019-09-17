import image1 from "../../images/image1.png";

export const cardMock = {
  type: "Image",
  id: 1,
  title: "Cool hat",
  author: "stylefresh",
  created_at: "2012-12-12T21: 08: 20Z",
  main_attachment: {
    big: image1,
    small: "http://lorempixel.com/100/125/"
  },
  likes_count: 5,
  liked: true,
  links: [
    {
      rel: "avatar",
      uri: "http://lorempixel.com/250/250/",
      methods: "GET"
    },
    {
      rel: "like",
      uri: "http://*********.com/images/2-train-in-india-a-gra/like",
      methods: "POST"
    }
  ]
};
