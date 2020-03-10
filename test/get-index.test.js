let tiny = require('tiny-json-http')
let data = require('@begin/data')
let sandbox = require('@architect/sandbox')


beforeAll(async () => {
  await sandbox.start()
})

afterAll(async () => {
  await sandbox.end()
})

// test that GET request completes without error
test('get /', async () => {
  let url = 'http://localhost:3333'
  await tiny.get({url})
})


// test that you can write data with @begin/data library
test('data.set', async () => {
  let result = await data.set({table: 'tmp'})
  expect(result.table).toBe('tmp')
  console.log(result)
})

// test that you can read data with @begin/data library
test('data.get', async () => {
  let result = await data.get({table: 'tmp'})
  expect(result.length).toBe(1)
  console.log(result)
})