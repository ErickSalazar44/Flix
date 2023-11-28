import Link from "next/link"
import './btn.css'
import { PlayPause } from "../icons/Icons"

const Button = ({ text }: { text: string }) => {
    return (
        <div className='transition-all duration-500'>
            <Link
                href={'/'}
                className="custom-button w-40 lg:w-48"
            >
                <span className='relative z-10'>
                    <PlayPause/>
                </span>
                <span className='relative text-xs lg:text-base z-10'>{text}</span>
            </Link>
        </div>
    )
}

export default Button