import axios from "axios";

export async function fetchWbTariffs(token: string, today: string) {
  const response = await axios.get(`https://common-api.wildberries.ru/api/v1/tariffs/box?date=${today}`, {
      headers: {
        Authorization: token,
      }}
  );

  return response.data;
}