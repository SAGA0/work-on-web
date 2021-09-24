'use strict'

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы смотрели', '')
		while (
			personalMovieDB.count == '' ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = +prompt('Сколько фильмов вы смотрели', '')
		}
	},

	checkPrivat: function (hide) {
		if (!hide) {
			console.log(personalMovieDB)
		}
	},

	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat === false) {
			personalMovieDB.privat = true
		} else {
			personalMovieDB.privat = false
		}
	},

	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из просмотренных фильмов?', ''),
				b = +prompt('На сколько оцените?', '')

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b
				console.log('done')
			} else {
				console.log('error')
				i--
			}
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			let genres = prompt(`Ваш любимые жанры через запятую`).toLowerCase()

			if (genres === null || genres === '') {
				console.log('uncorrect simbols')
				i--
			} else {
				personalMovieDB.genres = genres.split(', ')
				personalMovieDB.genres.sort()
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`)
		})
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count <= 10) {
			alert('Мало просмотренных фильмов')
		} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
			alert('Вы классический зритель')
		} else {
			alert('Вы киноман')
		}
	},
}
