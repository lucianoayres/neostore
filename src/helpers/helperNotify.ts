import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export function helperNotify(
  type: 'error' | 'success',
  message: string,
  toastId: string,
  autoClose: number,
  hideProgressBar = false,
  isWideVersion = true
) {
  toast[type](message, {
    position: isWideVersion ? 'bottom-left' : 'top-right',
    autoClose,
    hideProgressBar,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}
