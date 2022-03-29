/*
Copyright (C) 2022  André Schepers

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
export const readFile = (inputRef, callback) => {
    createReader(callback).readAsText(inputRef.current.files[0]);
}

export const readFileAsBase64 = (inputRef, callback) => {
    createReader(callback).readAsDataURL(inputRef.current.files[0]);
}

const createReader = (callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        callback(reader.result);
    }, false);
    return reader;
}

export const downloadJson = (filename, jsObject) => {
    if (!!!jsObject) {
        return;
    }
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(jsObject)], {type: 'text/plain'});
    element.href = URL.createObjectURL(textFile);
    filename = filename.replace(".json", "");
    element.download = filename + ".json";
    document.body.appendChild(element);
    element.click();
}