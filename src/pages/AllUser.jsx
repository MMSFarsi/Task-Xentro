import { useLoaderData } from 'react-router-dom'

const ALlUser = () => {
    const allUser=useLoaderData()
    console.log(allUser);
  return (
    <div className='p-12'>
        <h2 className="text-2xl font-black p-3 text-center">All Users</h2>

        <div className='grid grid-cols-4 gap-1'>
            {
                allUser.map(user=> <div key={user.id} className="card w-64 bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                      <h2 className="card-title">{user.name}</h2>
                      <p>{user.email}</p>
                      <p>{user.address.city}</p>
                      <div className="justify-center card-actions">
                        <button className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    </div>
  )
}

export default ALlUser