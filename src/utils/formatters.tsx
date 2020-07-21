import React from "react";

type Dimensions = { height?: string; width?: string; thickness?: string }

export const formatDimensions = (data: Dimensions) => {
    let result = "";
    for (let [key, value] of Object.entries(data)) {
        result += `${key} - ${value} / `
    }
    return result.slice(0, result.length - 3)
};