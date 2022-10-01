import Swal from 'sweetalert2';

function globalAlerts(alertType: string, position: any, message: string, timer: number) {
  switch (alertType) {
  case 'success':
    Swal.fire({
      position,
      backdrop: false,
      background: '#96E3BD',
      width: '25em',
      text: message,
      color: '#496874',
      timerProgressBar: true,
      timer,
      showConfirmButton: false,
    });
    break;
  case 'error':
    Swal.fire({
      position,
      backdrop: false,
      background: '#FDEDED',
      width: '25em',
      text: message,
      color: '#5F2120',
      timerProgressBar: true,
      timer,
      showConfirmButton: false,
    });
    break;
  case 'warning':
    Swal.fire({
      position,
      backdrop: false,
      background: '#FFF4E5',
      width: '25em',
      text: message,
      color: '#663C00',
      timerProgressBar: true,
      timer,
      showConfirmButton: false,
    });
    break;
  case 'info':
    Swal.fire({
      position,
      backdrop: false,
      background: '#95B3BF',
      width: '25em',
      text: message,
      color: '#000000',
      timerProgressBar: true,
      timer,
      showConfirmButton: false,
    });
    break;
  default:
    Swal.fire({
      position,
      backdrop: false,
      background: '#95B3BF',
      width: '25em',
      text: message,
      color: '#000000',
      timerProgressBar: true,
      timer,
      showConfirmButton: false,
    });
  }
}

export default globalAlerts;
