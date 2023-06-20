const generateSecretNumber = () => {
  let availableNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secretNumber = "";

  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * availableNumber.length);
    const digit = availableNumber.splice(index, 1)[0];
    secretNumber += digit;
  }

  return secretNumber;
};


const compareNumbers = (numberEntered, secretNumber) => {
  let picas = 0;
  let fijas = 0;

  for (let i = 0; i < 3; i++) {
    const enteredDigit = parseInt(numberEntered.charAt(i));
    const secretDigit = parseInt(secretNumber.charAt(i));

    if (enteredDigit === secretDigit) {
      fijas++;
    } else if (secretNumber.includes(enteredDigit.toString())) {
      picas++;
    }
  }

  return { picas, fijas };
};

const play = () => {
  const secretNumber = generateSecretNumber();
  let numberOfAttempts = 0;

  while (numberOfAttempts < 8) {
    const userNumber = prompt("Ingrese un número de 3 dígitos");

    if (userNumber.length === 3 && parseInt(userNumber) > 0) {
      const result = compareNumbers(userNumber, secretNumber);
      console.log(
        `Intento: ${numberOfAttempts + 1}, Número: ${userNumber}, Fijas: ${
          result.fijas
        }, Picas: ${result.picas}`
      );

      if (result.fijas === 3) {
        alert("¡Ganaste!");
        return;
      }
    } else {
      alert("El número ingresado no es válido. Por favor, intenta nuevamente.");
    }

    numberOfAttempts++;

    console.log(` Te quedan ${8-numberOfAttempts}`
    );
  }

  alert(
    `Perdiste. El número secreto era: ${secretNumber}`
  );
  console.log(secretNumber)
};

play();
