import { usData } from '../../Assets/Data'
import '../styles/Us.sass'

const Us = () => {
  return (
    <div className="us-container" id="Us">
      <div className="us-layout">
        {usData.map((data) => (
          <section key={data.title}>
            <h1 className='us-text'>{data.title}</h1>
            {data.paragraphs.map((paragraph, index) => (
              <p className='us-paragraph' key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}

export default Us
