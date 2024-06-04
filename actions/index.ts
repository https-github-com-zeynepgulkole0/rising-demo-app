"use server";
import axios from "axios";
import { error } from "console";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// sadece serverda çalışan fonksiyonlar - server actions
export async function login(username: string, password: string) {
  try {
    const response = await axios.post(
      "https://recruitment-api.vercel.app/login",
      {
        username,
        password,
      }
    );
    const { jwt } = response.data;
    console.log(response.data);

    cookies().set("token", jwt, {
      httpOnly: true,
    });
    return {
      error: null,
    };
  } catch (error) {
    console.error("Login failed:", error);
    return {
      error: "login error",
    };
  }
}

export const fetchTableData = async () => {
  try {
    const response = await axios.get(
      "https://recruitment-api.vercel.app/get-table",
      {
        headers: {
          Authorization: cookies().get("token")?.value,
        },
      }
    );
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch table data:", error);
    return {
      data: null,
      error: "Failed to fetch table data",
    };
  }
};

export const fetchInfoData = async () => {
  try {
    const response = await axios.get(
      "https://recruitment-api.vercel.app/get-info",
      {
        headers: {
          Authorization: cookies().get("token")?.value,
        },
      }
    );
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch info:", error);
    return {
      data: null,
      error: "Failed to fetch info",
    };
  }
};
