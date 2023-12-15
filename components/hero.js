const Hero = ({ title, subtitle, imageOn = false }) => (
  <div>
    <h1>CUBE</h1>
    <p>アウトプットしていくサイト</p>
    {imageOn && <figure> [画像] </figure>}
  </div>
)
export default Hero
