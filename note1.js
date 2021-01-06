//commande de creation:
//npx create-react-app nom-app

/**
 * Puis entrer dans le dossier créé, puis "code ."
 * Ensuite "npm start" pour lancer le serveur de dev
 *
 */

// DESTRUCTURATIONS
// Soit:
const obj = { b: 2, a: 1 };
/**
 * Si je veux un objet contenant la valeur de "obj" et en plus autre chose, sans mo
 * difier obj, alors je peux faire une copie superficielle de obj tout en ajoutant
 * des chose, en utilisant l'opérateur spread (to spread = disperser)
 */
const obj2 = { ...obj, c: 3 };
/**
 * Si je veux opérer de manière ordonnée sur un objet, qui est par essence, une
 * structure non ordonnée, alors je peux commencer par récupérer les clés de l'objet,
 * puis les ordonner:
 */
const orderedKeys = Object.keys(obj2).sort();
/**
 * Conscient de ce que je fais, je distingue alors des traitements du style impératif:
 */
for (const key of orderedKeys) {
  console.log(obj2[key]);
}
/**
 * Ou comme ici, où l'ordre choisi est différents:
 */
for (const key of orderedKeys.reverse()) {
  console.log(obj2[key]);
}
/**
 * Où le style est impératif, de situations où je voudrais utiliser un style
 * fonctionnel (au sens fonction mathémaatique e non pas fonctionnalité).
 */
/**
 * Si je veux distinguer entre faire des ifs de façon imérative ou fonctionnelle
 * il est intéressant de distinguer entre:
 */
const cond = true; // ou quoi que ce soit
if (cond) {
  console.log("La condition est vérifiée");
} else {
  console.log("La condition n'est pas vérifiée");
}

// Et ceci:
const mess = cond
  ? "La condition est vérifiée"
  : "La condition n'est pas vérifiée";
/**
 * Dans le premier cas l'expression s'évalu à "undefined", son intérêt et
 * de donner des ordres à la machine.
 * Dans le deuxième, c'est la valeur en laquelle s'évalue l'expression qui est
 * intéressante. Il y a un if, mais l'intérêt du if est de générer une valeur et non
 * pas d'éxécuter un ordre.
 */

//f(x, y) = x+y
// g(x) = x*x

//f(g(6), 9)      6*6 + 9
// g(g(6))      6*6 * 6*6

// Boucles impératives:
// for, while
// "Boucler" de manière orientée "fonction" : map, reduce, filter, etc

const truc = [1, 3, 7].map((x) => x * x);

// Soit
const t = [1, 3, 4, 11, 16, 7];
const resultat = [];
for (let i = 0; i < t.length; i++) {
  if (t[i] % 2 === 0) {
    resultat.push(t[i]);
  }
}

console.log(resultat); // [4, 16]

/**
 * Puis admire la façon fonctionnelle, on y utilise des fonctions d'ordre supérieur(
 * fonctions auxquelles on passe des fonction en argument dans le cas présent - terme
 * valable aussi pour des fonctions qui rendent des fonction)
 */
t.filter((elem) => elem % 2 === 0);
// On peux les enchaîner:
t.filter((elem) => elem % 2 === 0).map((e) => e * 2);
// Et en enchaîner autant que l'on veut:
t.filter((elem) => elem % 2 === 0)
  .map((e) => e * 2)
  .filter((e) => e < 20);
