import { CV_DICTIONARY } from "../config"

export const downloadCvService = () => {

    const link = document.createElement("a");

    link.href = CV_DICTIONARY.ROUTE;
    link.download = CV_DICTIONARY.FILE;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return Promise.resolve();
}