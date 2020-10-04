# word-calc
Word Calc is an API that can perform calculations from input in either English or German

The API should have a POST route called `calculate` that takes a `String` as input and returns the result as a `Number`.

## Features

- Add two English numbers (0 - 10) together
    - `"one plus three"`
    - `"four plus nine"`
    - `"six plus one"`
- Subtract two English numbers (0 - 10) from each other
    - `"four minus six"`
    - `"five minus five"`
    - `"eight minus nine"`
- Multiply two English numbers (0 - 10)
    - `"eight times four"`
    - `"ten times three"`
    - `"seven times six"`
- Add two German numbers (0 - 10) together
   - `"Einz plus Drei"`
   - `"Vier plus Neun"`
   - `"Sechs plus Einz"`
- Subtract two German numbers (0 - 10) from each other
    - `"Vier minus Sechs"`
    - `"Funf minus Funf"`
    - `"Acht minus Neun"`
- Multiply two German numbers (0 - 10)
    - `"Acht mal Vier"`
    - `"Zehn mal Drei"`
    - `"Sieben mal Sechs"`

## API
The API should accept a JSON object that looks like this in the body

### Request Body
```
{
    "lang": "en",
    "input: "one plus one",
}
``` 

### Response Body
```
{
    "lang": "en"
    "result": 2
}
```
