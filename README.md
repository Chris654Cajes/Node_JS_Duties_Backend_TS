# Node JS Typescript Duties Backend

This is the API backend that allows users to read, create, update, or delete duties in the record

## Setup

Navigate to this project folder

```bash
cd NodeDutyBackendTS
```

Install the dependencies in this projecy

```bash
npm install
```

Build the project

```bash
npm run build
```

Run the API

```bash
npm run dev
```

## Usage

Use these url to fetch or update duty records

```
http://localhost:8000/api/v1/duty/

Method: 'GET'

- returns list of duties without request body
```


```
http://localhost:8000/api/v1/duty/1

Method: 'GET'

- returns one duty by id without request body
```

```
http://localhost:8000/api/v1/duty/1

Method: 'DELETE'

- deletes one duty by id without request body
```


```
http://localhost:8000/api/v1/duty/

Method: 'POST'

- add a new dutiy with request body

Request body:

{
    "id": "51",
    "name": "inspire"
}
```

```
http://localhost:8000/api/v1/duty/51

Method: 'PATCH'

- update an existing dutiy with request body

Request body:

{
    "id": "51",
    "name": "recording"
}#   N o d e _ J S _ D u t i e s _ B a c k e n d _ T S 
 
 
