import axios from "axios";
import {
  FORM_DATA_UPLOAD_URL,
  VISUAL_DATA_UPLOAD_URL,
  LIST_ITEM_DATA_UPLOAD_URL,
} from "../constants/apiUrlAddresses";

export const uploadFormData = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    const response = await axios.post(FORM_DATA_UPLOAD_URL, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const uploadVisualData = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    const response = await axios.post(VISUAL_DATA_UPLOAD_URL, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const uploadListItemData = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    const response = await axios.post(LIST_ITEM_DATA_UPLOAD_URL, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};
