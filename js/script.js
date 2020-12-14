"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt("Один из послежних просмотренных фильмов?", ""),
            b = prompt("На сколько вы его оцените?", "");

        if (a != null && a != "" && a.length < 50 && b != null) {
            personalMovieDB.movies[a] = b;
            console.log("success");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("To fiew movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Well done!");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are movies king!");
    } else {
        console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);