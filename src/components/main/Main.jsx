import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

export default function Main() {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} />
        </div>
        <div className="main-container">

            {!showResult
            ?
            <>
             <div className="greet">
                <p><span>Hello, User!</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to visit.</p>
                    <img src={assets.compass_icon} />
                </div>
                <div className="card">
                    <p>Summarize the concept of frontend learning.</p>
                    <img src={assets.bulb_icon} />
                </div>
                <div className="card">
                    <p>Some outdoor activites.</p>
                    <img src={assets.message_icon} />
                </div>
                <div className="card">
                    <p>Give the output of following code</p>
                    <img src={assets.code_icon} />
                </div>
            </div>
            </>
             :
             <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} />
                    {loading
                    ?
                    <div className='loader'>
                        <hr/>
                        <hr/>
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                   
                </div>
             </div>
            }

           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon}/>
                        <img src={assets.mic_icon}/>
                        {input?<img onClick={()=>onSent()} src={assets.send_icon}/> : null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                </p>
            </div>
        </div>
    </div>
  )
}
