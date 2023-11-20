import PropTypes from "prop-types";
import { BsPenFill, BsTrash } from "react-icons/bs";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Table = ({ user, index }) => {
    const axiosSecure = useAxiosSecure()

    const handleDeleteUser = () => {
        console.log(user._id);
        axiosSecure.delete(`/users/${user._id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.email} deleted successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user.profile}
                alt="user"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        {user.name}
      </td>
      <td>{user.email}</td>
      <th>
        <button onClick={handleDeleteUser} className="btn btn-ghost btn-sm"><BsTrash className="text-lg"></BsTrash></button>
        <button className="btn btn-ghost btn-sm"><BsPenFill className="text-lg"></BsPenFill></button>
      </th>
    </tr>
  );
};

Table.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number
};

export default Table;
