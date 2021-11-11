import React, { useState, useContext } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { SocketContext } from '../../streamer/context'
import { setUserKey } from '../../actions/users'

const VideoPlayer = ({ advisorKey }) => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call,  myKey, setName, leaveCall, callUser,  answerCall  } = useContext(SocketContext)

  const dispatch                = useDispatch()
  const user                    = JSON.parse(localStorage.getItem('profile'))

  return (
    <div className="row col-lg-12">
      {stream && (
        <div className="col-lg-5">
          <div className="p-0 mt-30 mb-30 single-story-box wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
              <video className="w-100" playsInline muted ref={myVideo} controls autoPlay/>
          </div>
          <form noValidate autoComplete="off">
              {
                user?.result?.userRole === 'advisor' && (
                  <div className="form-group">
                    <input className="my-form-control" label="Name" value={user?.result?.name} hidden/>
                    <button type="button" className="custom-button" onClick={() => dispatch(setUserKey( user?.result?._id, myKey)) } >Make Me Live</button>
                  </div>
                )
              }
              
              <div className="form-group">
                <button type="button" className="custom-button" onClick={() => window.location.reload()}>REFRESH</button>
                {
                  user?.result?.userRole === 'advisor' ? (
                    callAccepted && !callEnded && (
                      <button className="custom-button" type="button" onClick={leaveCall}>
                        Hang Up
                      </button>
                    )
                  ) : (
                    callAccepted && !callEnded ? (
                      <button className="custom-button" type="button" onClick={leaveCall}>
                        Hang Up
                      </button>
                    ) : (
                      <button className="custom-button" type="button" variant="contained" color="primary" onClick={() => callUser(advisorKey)}>
                        Call
                      </button>
                    )
                  )
                }
              </div>
          </form>
          {call.isReceivingCall && !callAccepted && (
            <div>
              <h5>You are getting a call: {call.name}</h5>
              <button onClick={answerCall}>
                Answer
              </button>
            </div>
          )}
        </div>
        
      )}
      {callAccepted && !callEnded && (
        <>
            <div className="col-lg-2"></div>
              <div className="col-lg-5">
                <div className="p-0 mt-30 mb-30 single-story-box wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                    <video className="w-100" playsInline ref={userVideo} controls autoPlay/>
                </div>
                
                {call.isReceivingCall && !callAccepted && (
                  <div>
                    <h1>{call.name} is calling:</h1>
                    <button onClick={answerCall}>
                      Answer
                    </button>
                  </div>
                )}
            </div>
        </>
      )}
    </div>
  )
}

export default VideoPlayer
