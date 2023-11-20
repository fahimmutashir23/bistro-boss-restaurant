import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Table from "../../Components/Table/Table";
import Spinner from "../../Components/Loader/Spinner";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isPending, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const userData = await axiosSecure.get("/users");
      return userData;
    },
  });
  
  if(isPending){
    return <Spinner></Spinner>
  }
  refetch()

  return (
    <div>
      <div className="text-2xl font-semibold text-center mb-6">Total User : {users?.data.length}</div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users?.data?.map((user, idx) => <Table key={idx} user = {user} index={idx}></Table>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHome;
