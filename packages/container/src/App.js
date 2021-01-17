import React from 'react'
import MarketingApp from './components/MarketingApp'

import Title from './components/Title/Title'

export default () => {
  return (
    <div>
      <h1>hi there</h1>
      <hr />
      <Title label={'My title'} />
      <hr />
      <MarketingApp />
    </div>
  )
}
