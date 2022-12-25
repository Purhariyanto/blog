import React, { useEffect } from "react"
import AdSense from 'react-adsense'

const AdsTop = () => {

  return (
    <div className="min-w-full mx-auto">
      <AdSense.Google
          className="adsbygoogle block"
          data-ad-client="ca-pub-5738026098468973"
          data-ad-slot="6209592731"
          data-ad-format="auto"
          data-full-width-responsive="true"
      />
    </div>
  )
}

export default AdsTop
