import toastr from 'toastr';
import 'toastr/build/toastr.css';
/**
warning,success,error
https://www.npmjs.com/package/toastr#other-options

settings
https://codeseven.github.io/toastr/demo.html
github
https://github.com/CodeSeven/toastr
 */

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-full-width',
  preventDuplicates: true,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

const error = toastr.error;
const warning = toastr.warning;

export const newToastr = {
  error,
  warning,
};
