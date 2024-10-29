import axios from "axios";

type ApiResponse = {
  data: {};
};

async function fetchData(url: string): Promise<ApiResponse> {
  try {
    const response = await axios.get<ApiResponse>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
