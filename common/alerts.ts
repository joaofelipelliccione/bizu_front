import Swal from 'sweetalert2';

function globalAlerts(alertType: string, message: string) {
  switch (alertType) {
  case 'success':
    Swal.fire({
      position: 'bottom',
      text: message,
      background: '#96E3BD',
      color: '#496874',
      width: '20em',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    break;
  case 'error':
    Swal.fire({
      position: 'bottom',
      text: message,
      background: 'red',
      color: '#496874',
      width: '20em',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    break;
  default:
    Swal.fire({
      position: 'bottom',
      text: message,
      background: 'white',
      color: '#496874',
      width: '20em',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }
}

export default globalAlerts;
