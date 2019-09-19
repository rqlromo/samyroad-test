// Helpers
import { fake_api } from "./api";

export const filterValue = value => {
  let fake_api_filtered = fake_api.data.filter(element => {
    return (
      element.title.toLowerCase().includes(value.toLowerCase()) ||
      element.author.toLowerCase().includes(value.toLowerCase())
    );
  });
  return fake_api_filtered;
};
