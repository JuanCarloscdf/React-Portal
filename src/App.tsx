
import './App.css'
import AnoterComponent from './components/AnoterComponent';
import MessageRefPortal from './portals/MessageRefPortal';
import { useMessage } from './hooks/useMessage';

function App() {

  const { ref: msgRef } = useMessage()
  return (
    <div className='text-white'>
      <AnoterComponent />
      <div>
        <MessageRefPortal ref={msgRef} />
      </div>
    </div>
  )
}

export default App
