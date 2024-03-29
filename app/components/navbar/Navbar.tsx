'use client'

import Container from "../Container"
import AhmetGatewaysLogo from "./AhmetGatewaysLogo"
import Categories from "./Categories"
import Search from "./Search"
import UserMenu from "./UserMenu"
import { SafeUser } from "@/app/types"

interface NavbarProps {
    currentUser: SafeUser | null
}

const Navbar = ({
    currentUser
}:NavbarProps) => {
    return (
        <div className="
                fixed 
                w-full 
                bg-white 
                z-10 
                shadow-sw">
           <div className="py-4 border-b-[1px]">
                <Container>
            <div className="
                    flex 
                    flex-row 
                    items-center 
                    justify-between 
                    gap-3 
                    md:gap-0">
                <AhmetGatewaysLogo/>
                <Search/>
                <UserMenu currentUser={currentUser}/>
          </div>
        </Container>
            </div>
            <Categories/>
        </div>
    )
}

export default Navbar