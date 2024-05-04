import HeaderLink from "./HeaderObjects/headerLinks";
import SectionBreak from "./SectionBreak";
import HeaderLogo from  "./HeaderObjects/headerLogo";

const Header = () => {
    return ( 
        <header className="bg-[#00000089] w-full hidden md:block">

            <div className="flex relative justify-between items-center h-[10vh] ">
                <div className="flex">
                    <HeaderLogo />
                </div>
                <div className="mr-4">
                    <HeaderLink text="Home" />
                    <HeaderLink text="Home" />
                    <HeaderLink text="Home" />
                </div>
            </div>
            <SectionBreak />
            
        </header>
    );
}
 
export default Header;