import SideMenu from '@/components/Profile/SideMenu'
import ProfileComponent from '@/components/Profile/ProfileComponent'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/Footer'

const MyProfile = () => {
  return (
    <>
      <Navbar />
        <div className='w-672 mx-auto mt-100 mb-200 flex justify-between'>
          <div className='w-36 flex flex-col items-center'>
            <h1 className='text-36 h1 mb-3'>내 프로필</h1>
            <SideMenu menu1="기본 정보 수정" menu2="멘토 정보 수정" />
          </div>
            <ProfileComponent />
        </div>
      <Footer />
    </>
  )
}

export default MyProfile