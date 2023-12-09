"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthday) => {
    // console.log('Current year, ', new Date().getFullYear());
    return new Date().getFullYear() - new Date(birthday).getFullYear();
};
exports.getAge = getAge;
