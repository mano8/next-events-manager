import { UserProfile } from '../auth/UserProfile'
import NavBarUI from './NavBarUI'

export const Header = () => {
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full z-50">
        <div className="container flex items-center m-auto gap-1">
          <NavBarUI sizeBreak='sm' UserLogin={<UserProfile />} />
        </div>
    </header>
  )
}
