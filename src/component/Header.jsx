import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
import LoginIcon from '@mui/icons-material/Login';
const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className='sticky z-10 header top-0 bg-slate-950 text-3xl flex justify-between items-center text-violet-700 font-bold p-3 border-b-2 border-gray-50'>
      <Link to={'/'}><span className='tracking-wider font-serif'>Cine<span className='text-white'>Place</span></span></Link>
      { useAppstate.login ?
        <Link to={'/addmovie'}><h1 className='text-lg text-white cursor-pointer flex items-center'>
          <Button><AddIcon className='mr-1' color='success' /> <span className='text-white font-bold'>Add New</span> </Button>
          </h1></Link>
        :
        <Link to={'/login'}><h1 className='text-lg text-white cursor-pointer flex items-center'>
          <Button><LoginIcon className='mr-1' color='success' /> <span className='text-white font-bold'>Login</span> </Button>
          </h1></Link>
      }
    </div>
  )
}

export default Header;