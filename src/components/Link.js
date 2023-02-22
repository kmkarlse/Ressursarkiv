export default function Link({url}) {
  return (
    <>
      <h3>Kilde: </h3>
      <li><a href={url}>{url}</a></li>
    </>
  )
}