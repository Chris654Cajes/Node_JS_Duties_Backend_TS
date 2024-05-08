import axios from 'axios';

test('fetches duties from API', async () => {
    const response = axios.get('https://localhost:8000/api/v1/duty');
});


test('fetches one duty from API by id', async () => {
    const response = axios.get('https://localhost:8000/api/v1/duty/1');
});


test('delete one duty from API by id', async () => {
    const response = axios.delete('https://localhost:8000/api/v1/duty/1');
});

test('add new duty from API with id and name', async () => {
    axios.post('https://localhost:8000/api/v1/duty/', {
        id: '223223',
        name: 'Cooking'
      });
});

test('update existing duty from API with id and name', async () => {
    axios.post('https://localhost:8000/api/v1/duty/1', {
        id: '1',
        name: 'Cooking'
      });
});
