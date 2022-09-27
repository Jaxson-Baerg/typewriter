const typeWriter = (sentence) => {
  sentence = sentence += "\n";

  let ms = 50;
  for (const char of sentence) {
    setTimeout(() => {process.stdout.write(char)}, ms);
    ms += 60;
  }
}

typeWriter("hello there from lighthouse labs");