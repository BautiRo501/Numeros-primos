let currentPrime = 2;

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function nextPrime(num) {
    let next = num + 1;
    while (!isPrime(next)) {
        next++;
    }
    return next;
}

function previousPrime(num) {
    let prev = num - 1;
    while (prev > 1 && !isPrime(prev)) {
        prev--;
    }
    return prev > 1 ? prev : 2; // Asegura que siempre haya un primo
}

function updatePrimeNumber() {
    document.getElementById("prime-number").innerText = currentPrime;
}

document.addEventListener("mousedown", (event) => {
    if (event.button === 0) { // Click izquierdo
        currentPrime = nextPrime(currentPrime);
    } else if (event.button === 2) { // Click derecho
        currentPrime = previousPrime(currentPrime);
    }
    updatePrimeNumber();
});

// Evitar el menú contextual del clic derecho
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
