import { on } from 'events'
import test from 'node:test'

var usuario: string = 'admin'

if (usuario === 'admin') {
}

type args = {
  name: string
  age?: number
  onClick?: () => void
} //age is optional

function testfunction(props: args) {
  return `Hello ${props.name}, you are ${props.age} years old`
}

testfunction({ name: 'John', age: 30 })

const welcome = ({ age, name }: args) => `Hello ${name}, you are ${age} years old` //return implicito sin {}

const welcome2 = ({ age, name, onClick }: args): string => {
  onClick?.()
  return `Hello ${name}, you are ${age} years old`
}

console.log(welcome2({ name: 'John', age: 40 }))

console.log(welcome({ name: 'John', age: 30 }))

const { age, name } = { name: 'John', age: 30 }
const [var1, var2] = [1, 2, 3]

const testArray = [1, 2, 3, 4, 5]

const testArray2 = [...testArray]

testArray.map((item) => {
  return <div>{item * 2}</div>
})
