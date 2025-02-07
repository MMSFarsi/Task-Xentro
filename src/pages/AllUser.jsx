import { useLoaderData, useNavigate } from 'react-router-dom'

const ALlUser = () => {
    const allUser=useLoaderData()
    const navigate = useNavigate();
    console.log(allUser);
  return (
    <div className='p-2 lg:p-8'>
        <h2 className="text-3xl  font-semibold text-blue-600 p-3 m-2 text-center">All Users</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                allUser.map(user=> <div key={user.id} className="card w-64 bg-base-100 card-lg shadow-sm">
                    <div className="card-body p- text-[12px]">
                      <h2 > <span className="font-semibold">Name: </span> {user.name}</h2>
                      <p> <span className="font-semibold">Email: </span>  {user.email}</p>
                      <p > <span className="font-semibold">Address: </span>  {user.address.city}</p>
                      <div className="justify-center mt-5 card-actions">
                        <button  onClick={() => navigate(`/users/${user.id}`)} className="btn btn-sm btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    </div>
  )
}

export default ALlUser