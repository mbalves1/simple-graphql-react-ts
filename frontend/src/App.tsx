import { gql, useQuery } from '@apollo/client'
import { NewUserForm } from './component/newUserForm';

type User = {
  name: string;
  id: string;
}

const GET_USER = gql`
  query {
    users {
      name
      id
    }
  }
`
;

function App() {

  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <div>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <NewUserForm />
    </div>
  )
}

export default App
