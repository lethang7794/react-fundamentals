// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx
// Exercise: https://www.typescriptlang.org/play?#code/PTAECEEMGcEsGNQDED2AnAttAUCUALAF0IAcAuEAGxXkkvxWkLIGYAGD4WaFSyQgKYATYAIAeAtPG4DgbAOwA6QtDHZssDCXSFQAKlAxQAJQGR4ugGZoUGUAHI0Zi-fWWArgDsLsFJ9AAqtCSnpAYAqiYABQA3tigCaB+AMruAEYYsIRBIWECADTYAL5koHGJSZ6pGVk5aKHhpVHuwfV5pUxosJ4A5gCUoAC8AHygAG4osELFA+WJ8H5MBJCeQpQC1Zm6g6BRAmMCnswmzoSKkRgAogdHADwAEgAqALIAMheX6+FHwwMjZfEKol9ocziQnDdCAARASWSDuSiEKJ9QFA0ALTxLSzoOw7EFHRTwdxoJxHR6QNA9ASEVFAjFYnGfATfFRDUDYzCKARfUHQQx8wgATxIAhQlnZOK5PKOfIAZAC0WiWrlwgBJTwkdzHJ5vdWawhMlm0ipFY3zRa6MZ0dwCNkcq7SlSKZVtNUarWKK2UG1mhIpdJbOoNARRL02lEm2lOQjE-xRX2gW72yqbLKDGL4FZrDYBrJFYYJiq3ISwMYFxUVxN8NLcgiEDCUSKDABELuDzeGQfat2A1e55craNu3X1oCmLbbeWboCFIpbgjEhGnwAHg57JbLhcStzSWsIfhnwoELeguaXw1ThB7u+IflXQJ79vvKNN2A83kIvn8AEESCRkQq5qYro-o1NkrTBmyzQQe0oCdN0-RDPeFR0JISIAAYAJooO4oCgpIwilAAJDEk7hEU6ERok0axomXbhBcKZnvRx4xKBgYweRoArsU6jiNoaC6DEoC-iQoCmkAA
// Extra Credit 1: https://www.typescriptlang.org/play?#code/PTAECEEMGcEsGNQDED2AnAttAUCUALAF0IAcAuEAGxXkkvxWkLIGYAGD4WaFSyQgKYATYAIAeAtPG4DgbAOwA6QtDG4wAUQlSZZAsRLQKwAO5nlATxIDo8NLBKE+AOwDmi9K+Ak+FgPwAxPAoQrIACgAqAIIaAMIaGgCyAOLwGtDJAHIAigAiGrkATFHOUcRRAKqxFVEAMlFIbACSUfBRAK4aUcliABoA1v0AbmIA6v21TckAmt25ACyjkEgAyhbZrgDSsxGzLQJlYcnzua4ARlEA8iZRAGzZhLkAEgBa0NC5sb0rSNlRm5QomI-gApbLJABK83armSLxQFWSNSeTTYL1gAFoAGajUZRNCuXLQWrQJAggCcUSiAEdCLEVs4SFFZtTYLNwH8WIRYK5YpBwABqKKJNDtGLTabQJoQ8BNUZxKK5XZ1ACs-RQT2SIJWL1uJGSADV+irIJsnvgSAanu0TFiDSqSBUxIwQfMoireRUUFFYgAOKJPCyubrzRgaWpIKIC0Yg31PFWJcAg2ICbIkbKxACMLwwt1ct3AEKiGESsWc0BMGAAXigVpt+hDgyhXEInoqbhpg9S6i1EvgBL1bgKkE8zIkAFYvLEaTa8ck0KuwbLOXJCWJUosrUYrXLtFawGcU7KRth1CJiWorGvXeQaEcQiImITOkFiJ4Q+6ZKKUlYaA2R8ckGmZxkixKIIixJAIVyCpcmmKtYk2KIISxConmybIxF9Exg3PFp8GyShnBeS5NhVMJNkuLEWheH02FGWBRjQSgcKTR9+iEKsnhBFUhiEJYTHwRJKAwNgHCAlgqwhSBbkSF42CEExYkyfp4GpeQVkoOsXgNQhMgqSA0FGTZNkKRFMwwfAmhIIQQTOS4UC-CEIVqNhCkoDQMHcy5snHDQMTECFekKVxRnkQoLGpM5ak2XJklqeYkBeNA4PANAQSA6YQVgakWCaFYTESaYkDECoDTETJfUyWp4FcA9PgqOtciicBw3aXIqwEZJsixfhikzAQVRVOxIEydoWF6TMUFiDBajOM4BFGM5pqQayzlcPz8GSZwbieVwVXkOzanweAVkIKstylLF8B2lBwwEVx2kgXoTEzCJ8HAeR2gFJosUoXpshBeRySGIZNkyTJil9Fh+iaIZnH9BIVliCF+myakVWpaY0BQDEUEzFS0AicAMAsKsMIENhpqETI2AxaCwgEKC2BBfKWmZKIQRQFBLlDWJXBIJoTFgQFOfyfp5HwDQKluDQIRQfo2EgZ0MF6M4PvgTYXmcIYITEeYxE2cBXGmEwBHl-FoBl8dYEyFBIFiW58mmjEl2mjB+ipbBvdgDASHQQhQAAKlAGBQAhARIHgQOsRxjBQAAcjQSPo4T72sXaZxo9gFBnFACpoEkZxIAwJn0AwAAKABvbBQDr0Bc5WdozgwWBCALouS4EAAabAAF89Br+uG+cJuW7bju0GL0u9Ar9pC6nru9CYew3AASlAABeAA+UAhhQWAhH7jeh-r4Jy0D2BGXaQgI6xLfw5TwhFHn82BCxAAeJ4IkSSZr8IDQlABCl2cIQbeFdnDtEoJQNe3th7nyYAQSAzghBALHq3QOm9QAVwEEMAQoC9ARyjs-VAmANB4NAV-H+EZy6AOAfgsBG8d6gFPsPOuuCGGKBIMnChjx36QCgYQCusDa5sLrrAe+FcACEV8SA3zvooeA7Q0DJ1ASfURYjh7J0IMo5wGi2F9zgZohBl9-4GjoO0AQD9ZHyPfoo5Rqjn5DAsQIfRw9G7NwwZPaeAgK42MIOYygljYHD0MUYuu2jdHYLcfXD+WJy4j3QW3TeVd8DINQQIJJhA+7bxiWIj+QhYBDFyZo0poAP58AWpQfQGBKCkM3gAIlfovUuDTt7eKXh-YAlSBCUBKWU-J-jQDJyxCk-xd8+6gEPo05pPiGmgEIFYAQjTBBiEIPM4A-SBldMKcUvJbCP5nBvoQXOCylmNOgJ4tubSsldKOcQXOWyDnAHiZgJ5sCwkZyztyU5UQSAkGESw-RJjElXPbgvHxD854QqXqAFeV9XBMKecPOgkghEAANpgoHaKABhkhhB6AACRV1mV3Pu6KQn10iVPcpHTS6kPjh48e4LO6lxSUyrxMLS6TM2f3b24h-ZoEDlXUAfySCgEMUAA


import * as React from 'react'

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument
  // 🦺 the `event` type should be `React.FormEvent<HTMLFormElement>`

  // 💰 make sure to call `event.preventDefault()` to prevent the default
  // behavior of form submit events (which refreshes the page).
  //
  // 🐨 create a `formElements` variable from the `event.currentTarget.elements`.
  // 🦺 You'll need to give it a type that makes the rest of the code compile (check the tip in the instructions)
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: formElements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
