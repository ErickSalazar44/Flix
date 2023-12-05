import Link from "next/link"
import './btn.css'
import { PlayPause } from "../icons/Icons"

const Button = ({ text }: { text: string }) => {
    return (
        <div className='transition-all duration-500 flex items-start'>
            <Link
                href={'/'}
                className="custom-button "
            >
                <span className='relative z-10'>
                    <PlayPause/>
                </span>
                <span className='relative text-xs lg:text-base lg:font-semibold z-10'>{text}</span>
            </Link>
        </div>
    )
}

export default Button