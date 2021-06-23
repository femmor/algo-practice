// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/) // - check for whitespaces, underscores, or is followed by upper cases
    .join("-") // join the string with dashes
    .toLowerCase(); // convert to lowercase
}

spinalCase('The_Andy_Griffith_Show');