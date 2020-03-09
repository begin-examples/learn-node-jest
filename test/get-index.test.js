let tiny = require('tiny-json-http')
let data = require('@begin/data')
let sandbox = require('@architect/sandbox')

let end 
beforeAll(async () => {
  end = await sandbox.start()
})

afterAll(async () => {
  await end()
})

test('get /', async () => {
  let url = 'http://localhost:3333'
  await tiny.get({url})
})

test('data.set', async () => {
  let result = await data.set({table: 'tmp'})
  expect(result.table).toBe('tmp')
  console.log(result)
})

test('data.get', async () => {
  let result = await data.get({table: 'tmp'})
  expect(result.length).toBe(1)
  console.log(result)
})