import React from 'react'
import { useLocation } from 'react-router'

import VideoPlayer from './components/streamVideo';
import { ContextProvider } from '../streamer/context'

const Stream = () => {
    const location = useLocation()
    const {advisorKey} = location.state
  
    return (
        
    <ContextProvider>
        <div>
            <section className="breadcrumb-area profile-bc-area">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                        Streaming
                        </h2>
                    </div>
                </div>
            </section>
            <section class="sucess-stories-section">
                <div class="container">
                    <div class="content">
                        <div class="section-header">
                            <h6 class="sub-title extra-padding">
                                An Exhaustive List Of
                            </h6>
                            <h2 class="title extra-padding">
                                Amazing Features
                            </h2>
                            <p class="text">
                                To find meaningful connections, dates, and life partners.
                            </p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <VideoPlayer advisorKey={advisorKey}/>
                    </div>
                </div>
            </section>
        </div>
    </ContextProvider>
    )
  }
  
  export default Stream;
