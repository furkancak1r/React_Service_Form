import axios from "axios";
import {ADMIN_URL}  from "../constants/apiUrlAddresses";
import { toast } from "react-toastify";

export default async function loginAdmin(username, password) {
  try {
    const response = await axios.post(
      ADMIN_URL,
      {
        username,
        password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return false;
    }
    toast.error("Sunucu ile iletişim kurulamadı!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    console.error("Sunucu ile iletişim hatası:", error);
  }
}
