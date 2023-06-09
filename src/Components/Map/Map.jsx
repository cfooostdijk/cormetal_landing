import '../styles/Map.sass'

const Map = (props) => {
  const {
    iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5678325145955!2d-58.72279002425832!3d-38.543729171801736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958f97c8ab932ac5%3A0x6ee4129323b467da!2sCORMETAL!5e0!3m2!1ses-419!2sar!4v1683832867267!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  } = props

  return (
    <div className="map-container">
      <div className="map-layout" dangerouslySetInnerHTML={{__html: iframeSource}} />
    </div>
  )
}

export default Map
