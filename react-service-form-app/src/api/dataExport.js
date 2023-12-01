import axios from "axios";
import {
    FORM_DATA_UPLOAD_URL,
    VISUAL_DATA_UPLOAD_URL,
    LIST_ITEM_DATA_UPLOAD_URL,
} from "../constants/apiUrlAddresses";

export const uploadFormData = (data) => {
    const jsonData = JSON.stringify(data);
    axios
        .post(FORM_DATA_UPLOAD_URL, jsonData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return true;
            }
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

export const uploadVisualData = (data) => {
    const jsonData = JSON.stringify(data);
    axios
        .post(VISUAL_DATA_UPLOAD_URL, jsonData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return true;
            }
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

export const uploadListItemData = (data) => {
    const jsonData = JSON.stringify(data);
    axios
        .post(LIST_ITEM_DATA_UPLOAD_URL, jsonData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.status === 200) {
                return true;
            }
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};
