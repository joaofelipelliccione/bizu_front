import Swal from 'sweetalert2';

function globalAlerts(alertType: string, message: string) {
  switch (alertType) {
  case 'success':
    Swal.fire({
      position: 'bottom',
      text: message,
      background: '#96E3BD',
      backdrop: false,
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
      background: '#FDEDED',
      backdrop: false,
      color: '#5F2120',
      width: '20em',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    break;
  case 'warning':
    Swal.fire({
      position: 'bottom',
      text: message,
      background: '#FFF4E5',
      backdrop: false,
      color: '#663C00',
      width: '20em',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    break;
  case 'info':
    Swal.fire({
      position: 'bottom',
      text: message,
      background: '#95B3BF',
      backdrop: false,
      color: '#663C00',
      width: '20em',
      showConfirmButton: false,
      timer: 3000,
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
