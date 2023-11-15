import Swal from "sweetalert2";


const Alert = ({title, text, icon}) => {

    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Cool'
      })
};

export default Alert;