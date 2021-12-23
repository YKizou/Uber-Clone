import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl';
import Map from './components/Map'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router';


export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user =>{
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/')
      }
    })
  }, [])
  
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} onClick={()=>signOut(auth)} />
          </Profile>
        </Header>  
        <ActionButtons>
          <Link href='/search' passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Ride
            </ActionButton>
          </Link>
          <ActionButton className='text-red-600'>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels (Not Available)
          </ActionButton>
          <ActionButton className='text-red-600'>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve (Not Available)
          </ActionButton>
        </ActionButtons>
        <Link href='/search' passHref>
          <InputButton>
            Where to ?
          </InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
 flex flex-col h-screen
`

const ActionItems = tw.div`
 flex-1 p-4
`

const Header = tw.div`
 flex justify-between items-center
`

const UberLogo = tw.img`
 h-28
`

const Profile = tw.div`
flex items-center 
`

const Name = tw.div`
mr-4 text-s
`

const UserImage = tw.img`
 h-12 w-12 rounded-full cursor-pointer
`

const ActionButtons = tw.div`
flex 
`

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl curson-pointer
`

const ActionButtonImage = tw.img`
h-3/5
` 

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center justify-center rounded-lg transform hover:scale-105 transition mt-8
`