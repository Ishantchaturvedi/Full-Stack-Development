import React, { useContext} from 'react'
import { ThemeContext,UserContext } from '../App'


const ChildC = () => {
   const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    function taggleTheme() {
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')

    }
  return (
    <div>
      <button onClick={taggleTheme}>
        Change Theme
      </button>
      data: {user.name}
    </div>
  )
}

export default ChildC
