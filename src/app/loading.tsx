export default function Loading() {

    return (
        <div className="w-full min-h-screen grid place-content-center">
            <div className="w-[60px] h-[60px] rounded-full animate-spin after:content-[''] after:absolute after:rounded-full  before:absolute before:rounded-full before:w-ful before:h-full [background-image:linear-gradient(0deg,#b0b0b0_0%,rgb(9,19,22)_100%)] after:w-[85%] after:h-[85%] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#111]"></div>
        </div>
    )
}