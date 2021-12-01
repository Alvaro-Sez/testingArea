const
  request = require('supertest'),
  app = require('../src/app'),
  api = request(app)

describe('GET /tasks', ()=>{

  test('should respond with a 200 status code', async ()=>{
    const response = await api.get('/tasks')
    expect(response.statusCode).toBe(200)
  })
  test('should respond with an array', async()=>{
    const response = await api.get('/tasks')
    expect(response.body).toBeInstanceOf(Array)
  })
})

describe('POST /tasks', ()=>{

  describe('given a id', ()=>{

    const newTask = {id:'someId'}

    test('should response with a 200 status code',async ()=>{
      const response = await api.post('/tasks').send(newTask)
      expect(response.statusCode).toBe(200)
    })
    test('should response with a content-type of application/json',async ()=>{
      const response = await api.post('/tasks').send(newTask)
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
    test('should response with an task ID',async ()=>{
      const response = await api.post('/tasks').send(newTask)
      expect(response.body.id).toBeDefined()

    })

  })

  describe('when id is missing', ()=>{

    test('should response with a 400 status code', async()=>{
      const fields = [
        {},
        {title:'Test Task'},
        {description: 'Test Description'}
      ]
      for( body of fields){
        const response = await api.post('/tasks').send(body)
        expect(response.status).toBe(400)
      }
    })

  })
})

