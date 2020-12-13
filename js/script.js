"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answerOne = prompt("Один из послежних просмотренных фильмов?", "");
const answerTwo = prompt("На сколько вы его оцените?", "");
const answerThree = prompt("Один из послежних просмотренных фильмов?", "");
const answerFour = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[answerOne] = answerTwo;
personalMovieDB.movies[answerThree] = answerFour;

console.log(personalMovieDB);