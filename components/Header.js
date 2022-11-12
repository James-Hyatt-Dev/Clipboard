import Link from "next/link"

function Header() {
  return (
    <div className=" flex items-center justify-center space-x-6 h-12 w-screen bg-slate-800 text-slate-300">
        <Link href='/'>Home</Link>
        <Link href='/clipboard'>Clipboard</Link>
        {/* <Link href='#'></Link>
        <Link href='#'></Link>
        <Link href='#'></Link> */}
    </div>
  )
}
// items-center flex justify-center space-x-6 mx-auto
export default Header