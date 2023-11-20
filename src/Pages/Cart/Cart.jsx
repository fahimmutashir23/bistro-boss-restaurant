import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <h1 className="font-semibold text-xl bg-orange-400 p-2 rounded-md max-w-fit">
            Total Food :
          </h1>
          <h1 className="font-semibold text-xl bg-orange-400 p-2 rounded-md max-w-fit">
            00
          </h1>
        </div>
        <button className="btn bg-orange-400 rounded-md hover:bg-orange-700">
          <Link to="/dashboard/payment">Pay</Link>
        </button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
