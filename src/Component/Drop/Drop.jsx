import react, {useState} from "react"
import DropData from "./DropData"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Drop.css'

//  sSETTING THE STATE FOR THE FUNCTIONALITY
function Drop(){
    const [show, setShow] = useState(true);
    const [isShow, setIsShow] = useState(true)

    function handleShow(id){
        setShow((prevShow) => {
            return {
                [id]: !prevShow[id]
            }
            
        })
        setIsShow(!isShow);
         
    }
    return (
        <div className="drop__div">
            <h7>Why use our platform</h7>
            <div className="div__para">
                {DropData.map(data => {
                    return (
                        <div className="drop__content" >
                             <div className="drops__para"  key={data.id} onClick={() => handleShow(data.id)}>
                                 <p className="drop__para">{data.header}</p>
                                 {/* THIS FUNCTION SHOULD BE CARRIED OUT ON CLICKED */}
                                 {isShow ? <ArrowForwardIosIcon className="forward__arr"/> : <KeyboardArrowDownIcon className="forward__arr"/>}
                               
                            </div>
                            <div className="smalls">
                                {show[data.id] && <small className="drop__header" >{data.content}</small>}
                            </div>
                   
                 </div>

                    )
                })}

            </div>
        </div>
    )
}
export default Drop;