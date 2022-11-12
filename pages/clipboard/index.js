import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/Clipboard/logo.svg';
import ImageComputer from '../../public/Clipboard/image-computer.png';
import ImageDevices from '../../public/Clipboard/image-devices.png';
import Blacklist from '../../public/Clipboard/icon-blacklist.svg';
import Text from '../../public/Clipboard/icon-text.svg';
import Preview from '../../public/Clipboard/icon-preview.svg';
import Google from '../../public/Clipboard/logo-google.png';
import IBM from '../../public/Clipboard/logo-ibm.png';
import Microsoft from '../../public/Clipboard/logo-microsoft.png';
import HP from '../../public/Clipboard/logo-hp.png';
import Graphics from '../../public/Clipboard/logo-vector-graphics.png';
import Facebook from '../../public/Clipboard/icon-facebook.svg';
import Twitter from '../../public/Clipboard/icon-twitter.svg';
import Instagram from '../../public/Clipboard/icon-instagram.svg';
import Head from "next/head";


function ClipboardPage () {
    return (
        <div>
            <Head>
                <title>Clipboard Project</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Alata&family=Bai+Jamjuree:wght@400;600&display=swap" rel="stylesheet" />
            </Head>
            {/* hero */}
            <section id="hero">
                <div className="section-container mb-40 pt-16">
                    <Image className="mx-auto my-16" src={Logo} alt='logo image' />
                    <h3>
                        A history of everything you copy
                    </h3>
                    <p className="section-content mb-10 text-2xl">
                        Clipboard allows you to track and organize everything you copy. 
                        Instantly access your clipboard on all your devices.
                    </p>

                    {/* button container */}
                    <div className="button-container">
                        <Link className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80" href='#'>Download for iOS</Link>
                        <Link className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80" href='#'>Download for Mac</Link>
                    </div>
                </div>
            </section>

            <section id="snippets">
                <div className="section-container my-20 px-10">
                    <h3>
                        Keep track of your snippets
                    </h3>
                    <p className="section-content mb-24 text-xl">
                        Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                    </p>
                </div>
            </section>

            {/* features section */}
            <section id="features">
                <div className="section-container my-20">
                    <div className="relative flex flex-col md:flex-row md:space-x-32">
                        {/* image */}
                        <div className="md:w-1/2">
                            <Image className="md:absolute top-0 right-[50%] px-10" src={ImageComputer} alt="Image of computer" />
                        </div>
                        {/* items container */}

                        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl mx-auto md:w-1/2 md:mb-60 md:text-left md:pl-16">
                            {/* item 1 */}
                            <div>
                                <h5>Quick Search</h5>
                                <p className="max-w-md text-grayishBlue">
                                    Easily search your snippets by content, category, web address,application, and more.
                                </p>
                            </div>

                            {/* item 2 */}
                            <div>
                                <h5>iCloud Sync</h5>
                                <p className="max-w-md text-grayishBlue">
                                    Instantly saves and syncs snippets across all your devices.
                                </p>
                            </div>

                            {/* item 3 */}
                            <div>
                                <h5>Completely History</h5>
                                <p className="max-w-md text-grayishBlue">
                                    Retrieve any snippets from the first moment you started using the app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* access */}
            <section id="access">
                <div className="section-container my-20">
                    <h3>Access Clipboard Anywhere</h3>
                    <p className="section-content mb-24 text-xl">
                        Whether you're on the go, or at your computer, you can access al your Clipboard snippets in a few simple clicks.
                    </p>
                    <Image src={ImageDevices} className="mx-auto" alt="image of different devices" />
                </div>
            </section>

            {/* supercharge */}
            <section id="supercharge">
                <div className="section-container my-20">
                    <h3>Supercharge your workflow</h3>
                    <p className="mb-16 section-content text-xl">
                        We've got the tools to boost your productivity.
                    </p>

                    {/* items container */}

                    <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <Image className="mb-6" src={Blacklist} alt="list icon scroll" /> 
                            <h5>Create Blacklists</h5>
                            <p className="max-w-md text-grayishBlue">
                                Easily search your snippets by content, category, web address, application, and more.
                            </p>
                        </div>

                        {/* item 2 */}
                        <div className="flex flex-col items-center space-y-5">
                            <Image className="mb-6" src={Text} alt="list icon scroll" /> 
                            <h5>Plain Text Snippets</h5>
                            <p className="max-w-md text-grayishBlue">
                                Remove unwanted formatting from copied text for a consistent look.
                            </p>
                        </div>

                        {/* item 3 */}
                        <div className="flex flex-col items-center space-y-5">
                            <Image className="mb-6" src={Preview} alt="list icon scroll" /> 
                            <h5>Sneak Preview</h5>
                            <p className="max-w-md text-grayishBlue">
                                Quick preview of all snippets on your Clipboard for easy access.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* references */}
            <section id="references">
                <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
                    <Image src={Google} alt='google logo grayscale' />
                    <Image src={IBM} alt='I B M logo grayscale' />
                    <Image src={Microsoft} alt='Microsoft logo grayscale' />
                    <Image src={HP} alt='H P logo grayscale' />
                    <Image src={Graphics} alt='Vector graphics logo grayscale' />
                </div>
            </section>

            {/* bottom CTA */}

            <section id="bottom">
                <div className="section-container my-20 mb-10">
                    <h3>Clipboard for iOS and MacOS</h3>
                    <p className="section-content mb-10">
                        Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.
                    </p>

                    {/* btn container */}
                    <div className="button-container">
                        <Link className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80" href='#'>Download for iOS</Link>
                        <Link className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80" href='#'>Download for Mac</Link>
                    </div>
                </div>
            </section>

            {/* footer */}

            <footer className="bg-gray-50">
                <div className="section-container">
                    <div className="flex flex-col items-center justofy-between md:flex-row">
                        {/* image */}
                        <Image className="scale-50" src={Logo} alt='logo image' />
                        {/* conatiner for menus and social */}
                        <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
                            {/* menus */}
                            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                                {/* menu 1 */}
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <Link className="hover:text-strongCyan" href='#' >FAQs</Link>
                                    </div>
                                    <div>
                                        <Link className="hover:text-strongCyan" href='#' >Contact Us</Link>
                                    </div>
                                </div>

                                {/* menu 2 */}
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <Link className="hover:text-strongCyan" href='#' >Privacy Policy</Link>
                                    </div>
                                    <div>
                                        <Link className="hover:text-strongCyan" href='#' >Press Kt</Link>
                                    </div>
                                </div>

                                {/* menu 3 */}
                                <div className="flex flex-col space-y-4 text-center md:text-left">
                                    <div>
                                        <Link className="hover:text-strongCyan" href='#' >Install Guide</Link>
                                    </div>
                                </div>
                            </div>

                            {/* social icons */}
                            <div className="flex justify-between w-32 py-1 md:pr-6">
                                <Link href='#'>
                                    <Image className="duration-200 ficon" src={Facebook} alt='face book logo' />
                                </Link>
                                <Link href='#'>
                                    <Image className="duration-200 ficon" src={Twitter} alt='twitter logo' />
                                </Link>
                                <Link href='#'>
                                    <Image className="duration-200 ficon" src={Instagram} alt='instagram logo' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default ClipboardPage;