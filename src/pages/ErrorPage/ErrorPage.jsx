import { Link } from 'react-router-dom'
import errorIcon from '../../assets/images/404.svg'
const ErrorPage = () => {
  return (
    <div className='bg-white flex items-center justify-center flex-col w-svw h-svh' >
             <p className='font-inter text-sub1 text-dark1'>Page Not Found</p>
             <Link className='font-inter text-sub3 text-primary underline mt-20' to={'/'}>Go to Home</Link>
        <img className='w-[790px] h-[450]' src={errorIcon} alt="" />
   
    </div>
  )
}

export default ErrorPage