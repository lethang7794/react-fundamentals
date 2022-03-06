// TypeScript with React
// http://localhost:3000/isolated/exercise/05.tsx
// https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wCgB6cuAFQE8wkBlNKYMeAd2BgAtFiYFKjxgwwALkoAbCGhRSeEAM4xxAZgAMW8sCUQpKGEgAm5JAA8kUNLqTkNAVgB0MJedKkY9JHADyDKENoADEAOzgAXjgACikkTFU4UIBXEAAjKwAaOFYAcxFxJNSMqABKSIA+IvSrUjQIUJU4FlQjfytDYAalSLgAHl84CyNQ4x7keqhjPpVWUNzs9sCYENCKiuiIAM7uwt9yiKqtjpguxo96xvhj5bOeqJbDJCWdxuiAb1I4AgBqfELYvEYNk8iIDlU4gk4D8csB8sCvgQALT-GKQ4Gw+HguDouBIzEiTKI-AAKlRgISILhYMqOKBcBJBIR33w5HJ6KpWNpuKooIRAF9Sh4vAw4ABheRoZIGFZQAAKODA9zgn2+6IA-IUUjUoIibkEoJq4ABrJC0CCYOAipAWuD607dRF8o3akqkfmkTDJUIYM7iyXSg0fOlQqIabL26C9fB-TkiXoaOD8woSqRSmXQBVbJTlVXNbrwIhKaXwKL2u4AbUjUAAuhSMXyhd8iDBklBwtFEd8+sZgAA3Cpd779erGJCD4eTlXo-kq6uz9582dRPoQZJidcVRdIYtSGD8vrkNcbmATqeH0fjoeH3sDxFCj2e72+hpwACCYDA0VzTqQrfbMTXreZ6Tn0PAAIwVKm6YGoeEEgcOfTQYGsohjAETvOBs7VhEABEPy4UyGEAEyzuQCHdshGZQGhGFYXa2yynhSKEXyJFkRR-RUQatGYdhjHQHhJKsdS6HvKRcDkUOlEBtRvH0ThuHkCJ8LsZJCE3v2Z4Ph4FiQLAKrvp+SakEAA

type Operator = '+' | '-' | '*' | '/'
type OperatorFn = (left: number, right: number) => number
type Operations = Record<Operator, OperatorFn>

const operations: Operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
}

type CalculatorProps = {
  left?: number
  operator?: Operator
  right?: number
}
function Calculator({left = 0, operator = '+', right = 0}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
    </div>
  )
}

export {App}
