import axios from "axios";

const url: string = "https://api.meetup.com/grammerhub/events";

export const getEvent = () => {
  return axios.get(url);
};
