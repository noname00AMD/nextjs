import Link from "next/link"
import Image from "next/image"

export default function HomePage(props) {
  return (
    <>

      {/* <h1>{props.error.status}</h1> */}
      <h2>{props.error}</h2>
    </>
  )
}
