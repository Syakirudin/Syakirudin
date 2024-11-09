import React from 'react'
import PersonalComponent from '../components/personalComponent' 
import DetailComponent from '../components/detailComponent'



function Home() {
  return (
    <div className='home-container'>
      <div className='personal-div'>
        {/* component 1 */}
        <PersonalComponent />
        
      </div>
      <div className='about-div'>
        {/* component 2 */}
        <DetailComponent />
        
      </div>

    </div>
  )
}

export default Home