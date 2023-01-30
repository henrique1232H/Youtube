import "./style.css"
import { BellSimple, List, MagnifyingGlass, UserCircle, VideoCamera } from "phosphor-react"

export function Header() {

    return (
        <div className="Header">
            
            <div className="flex">

                <div>

                <List 
                    size={30}
                    color="white"/>
                </div>
                
                <div>

                    <div>
                        <input type="text" placeholder="Pesquisar" />
                        <button type="submit">
                            <MagnifyingGlass 
                            size={30} 
                            color="white"/>
                        </button>
                    </div>
                   
                </div>

                <div>

                    <VideoCamera 
                     color="white"
                     size={30}/>

                     <BellSimple 
                     size={30}
                     color="white"/>

                     <UserCircle
                     size={30}
                     color="white"/>
                </div>

            </div>

        </div>
    )
}