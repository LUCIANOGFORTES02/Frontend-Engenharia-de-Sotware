import { FileImage,FileVideo,FileAudio    } from 'lucide-react';
import Stat from './stat';

export  function Dashboard() {
  return (
    
        <div className="flex flex-1 flex-col gap-4 p-4 h-screen ">
          <div className="flex flex-wrap justify-between"> 
            <Stat title="Imagens" value={5} icon={FileImage }/>
            <Stat title="Vídeos" value={6} icon={FileVideo }/>
            <Stat title="Áudios" value={3} icon={FileAudio }/>
          </div>
        </div>


   
  
  )
}
