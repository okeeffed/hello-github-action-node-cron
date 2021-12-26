const fs = require("fs");
const path = require("path");

/**
 * Read hello.txt and modify it such that it adds a new line
 * at the end of the file with the word "hello" where the number of
 * o's is equal to the number of lines +1 in the file.
 */
function main() {
  const fileContents = fs.readFileSync(
    path.join(__dirname, "hello.txt"),
    "utf8"
  );
  const numberOfLines = fileContents.split("\n").length;
  const elongatedOhs = Array(numberOfLines + 1)
    .fill("o")
    .join("");

  const newFileContents = fileContents + `\nhell${elongatedOhs}`;

  fs.writeFileSync(path.join(__dirname, "hello.txt"), newFileContents);
}

main();
