const movies = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];

for (const movie of movies) {
    let rating = "";
    let average = 0;
    let verdict = "";

    for (let i = 0; i < 5; i++) {
        rating += movie[1][i] + " "
        average += movie[1][i]
    }

    average /= 5;

    if (average >= 9) {
        verdict = "Excellent";
    } else if (average >= 7) {
        verdict = "Good";
    } else {
        verdict = "Average";
    };

    console.log(`Name: ${movie[0]}`);
    console.log(`Ratings: ${rating}`);
    console.log(`Average Rating: ${average}`);
    console.log(`Verdict: ${verdict}`);
    console.log()
};
