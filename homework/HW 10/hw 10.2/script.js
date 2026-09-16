function check() {
    const age = Number(document.getElementById('age').value);

    if (!age || age < 0) {
        result.textContent = 'Введіть коректний вік';
    } else if (age < 18) {
        result.textContent = 'Ви неповнолітні';
    } else {
        result.textContent = 'Ви повнолітні';
    }
}
