import React from "react";

export const separateWithCommas = (Component, list) => {
    const lastIdx = list.length - 1;
    return list.map((item, idx) => (<><Component>{item}</Component>{idx !== lastIdx ? `, ` : ""} </>))
};

export const formatDimensions = (data) => {
    let result = "";
    for (let [key, value] of Object.entries(data)) {
        result += `${key} - ${value} / `
    }
    return result.slice(0, result.length - 3)
};